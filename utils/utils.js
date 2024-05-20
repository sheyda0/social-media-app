export function getImgData(input, setter) {
  const files = input.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      setter(this.result);
    });
  }
}
