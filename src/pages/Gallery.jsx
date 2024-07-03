import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  const [images, setImages] = useState([
    { title: "Image 1", description: "Description 1", src: "/placeholder.svg" },
    { title: "Image 2", description: "Description 2", src: "/placeholder.svg" },
    { title: "Image 3", description: "Description 3", src: "/placeholder.svg" },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        title: file.name,
        description: "Newly uploaded image",
        src: URL.createObjectURL(file),
      };
      setImages([...images, newImage]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{image.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                width="600"
                height="400"
                src={image.src}
                alt={image.title}
                className="mx-auto rounded-xl object-cover"
              />
              <p>{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Upload New Image</Button>
        </DialogTrigger>
        <DialogContent>
          <input type="file" onChange={handleUpload} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;