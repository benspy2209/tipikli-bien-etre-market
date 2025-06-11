
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Edit3, Save, X, RotateCcw } from "lucide-react";

interface ImageEditorProps {
  productId: string;
  defaultImage: string;
  onImageChange: (newImageUrl: string) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ 
  productId, 
  defaultImage, 
  onImageChange 
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [tempImageUrl, setTempImageUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  // Load custom image from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(`custom-image-${productId}`);
    if (stored) {
      setCustomImageUrl(stored);
      onImageChange(stored);
    }
  }, [productId, onImageChange]);

  const handleEdit = () => {
    setIsEditMode(true);
    setTempImageUrl(customImageUrl || defaultImage);
    setImageError(false);
  };

  const handleSave = () => {
    if (tempImageUrl && !imageError) {
      setCustomImageUrl(tempImageUrl);
      onImageChange(tempImageUrl);
      localStorage.setItem(`custom-image-${productId}`, tempImageUrl);
      setIsEditMode(false);
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setTempImageUrl('');
    setImageError(false);
  };

  const handleReset = () => {
    setCustomImageUrl('');
    onImageChange(defaultImage);
    localStorage.removeItem(`custom-image-${productId}`);
    setIsEditMode(false);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!isEditMode) {
    return (
      <div className="relative group">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
          onClick={handleEdit}
        >
          <Edit3 className="w-4 h-4" />
        </Button>
        {customImageUrl && (
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
            onClick={handleReset}
            title="Revenir à l'image par défaut"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <Card className="p-4 mb-4 border-2 border-tipikli-sage">
      <CardContent className="p-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Mode édition d'image</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
              >
                <X className="w-4 h-4 mr-1" />
                Annuler
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                disabled={!tempImageUrl || imageError}
                className="bg-tipikli-sage hover:bg-tipikli-sage-dark"
              >
                <Save className="w-4 h-4 mr-1" />
                Sauvegarder
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">URL de l'image:</label>
            <Input
              type="url"
              value={tempImageUrl}
              onChange={(e) => setTempImageUrl(e.target.value)}
              placeholder="https://exemple.com/image.jpg"
              className={imageError ? "border-red-500" : ""}
            />
            {imageError && (
              <p className="text-sm text-red-500">
                Impossible de charger cette image. Vérifiez l'URL.
              </p>
            )}
          </div>

          {tempImageUrl && (
            <div className="border rounded-lg p-2">
              <p className="text-sm text-muted-foreground mb-2">Aperçu:</p>
              <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={tempImageUrl}
                  alt="Aperçu"
                  className="w-full h-full object-contain"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageEditor;
