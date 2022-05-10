import ImageCropPicker from "react-native-image-crop-picker";

export const openGallery = (data) => {
      return new Promise((resolve, reject) => {
        ImageCropPicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
          }).then((res) => {
            resolve(res)
          }).catch((errr)=>{
              reject(errr)
          });
      });
  };

  export const openCamera = (data) => {
    return new Promise((resolve, reject) => {
      ImageCropPicker.openCamera({
          width: 400,
          height: 400,
          cropping: true,
        }).then((res) => {
          resolve(res)
        }).catch((errr)=>{
            reject(errr)
        });
    });
};