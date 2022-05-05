import ImageCropPicker from "react-native-image-crop-picker";

export const openGallery = (data) => {
      return new Promise((resolve, reject) => {
        ImageCropPicker.openPicker({
            width: 400,
            height: 400,
            cropperCircleOverlay: true,
            cropping: true,
          }).then((res) => {
            resolve(res)
          }).catch((errr)=>{
              reject(errr)
          });
      });
  };