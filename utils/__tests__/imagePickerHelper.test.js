/**
 * 
 * 
//Unit Tests

describe('launchImagePicker', () => {
  it('should call checkMediaPermissions', async () => {
    const spy = jest.spyOn(ImagePicker, 'launchImageLibraryAsync')
    await launchImagePicker()
    expect(spy).toHaveBeenCalled()
  })

  it('should return the uri of the selected image', async () => {
    const result = await launchImagePicker()
    expect(result).toBeDefined()
  })

  it('should not return a uri if the picker is cancelled', async () => {
    const spy = jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockReturnValue({cancelled: true})
    const result = await launchImagePicker()
    expect(result).toBeUndefined()
  })

  it('should call ImagePicker.requestMediaLibraryPermissionsAsync if not on web', async () => {
    const spy = jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync')
    await launchImagePicker()
    expect(spy).toHaveBeenCalled()
  })

  it('should reject if we don\'t have permission to access the photos', async () => {
    const spy = jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync').mockReturnValue({granted: false})
    await expect(launchImagePicker()).rejects.toThrow('We need permission to access your photos')
  })
})

describe('openCamera', () => {
  it('should call ImagePicker.requestCameraPermissionsAsync', async () => {
    const spy = jest.spyOn(ImagePicker, 'requestCameraPermissionsAsync')
    await openCamera()
    expect(spy).toHaveBeenCalled()
  })

  it('should return the uri of the taken image', async () => {
    const result = await openCamera()
    expect(result).toBeDefined()
  })

  it('should not return a uri if the camera is cancelled', async () => {
    const spy = jest.spyOn(ImagePicker, 'launchCameraAsync').mockReturnValue({cancelled: true})
    const result = await openCamera()
    expect(result).toBeUndefined()
  })

  it('should log that no permission to access the camera if permission is not granted', async () => {
    const spy = jest.spyOn(ImagePicker, 'requestCameraPermissionsAsync').mockReturnValue({granted: false})
    await openCamera()
    expect(console.log).toHaveBeenCalledWith('No permission to access the camera')
  })
})

describe('uploadImageAsync', () => {
  const uri = 'testuri'
  it('should call getFirebaseApp', async () => {
    const spy = jest.spyOn(ImagePicker, 'getFirebaseApp')
    await uploadImageAsync(uri)
    expect(spy).toHaveBeenCalled()
  })

  it('should call XMLHttpRequest', async () => {
    const spy = jest.spyOn(ImagePicker, 'XMLHttpRequest')
    await uploadImageAsync(uri)
    expect(spy).toHaveBeenCalled()
  })

  it('should call ref', async () => {
    const spy = jest.spyOn(ImagePicker, 'ref')
    await uploadImageAsync(uri)
    expect(spy).toHaveBeenCalled()
  })

  it('should call uploadBytesResumable', async () => {
    const spy = jest.spyOn(ImagePicker, 'uploadBytesResumable')
    await uploadImageAsync(uri)
    expect(spy).toHaveBeenCalled()
  })

  it('should call getDownloadURL', async () => {
    const spy = jest.spyOn(ImagePicker, 'getDownloadURL')
    await uploadImageAsync(uri)
    expect(spy).toHaveBeenCalled()
  })

  it('should return the download url of the uploaded image', async () => {
    const result = await uploadImageAsync(uri)
    expect(result).toBeDefined()
  })
})

//The tests above are for the functions launchImagePicker, openCamera, and uploadImageAsync. The tests check that the expected functions have been called, that the expected values have been returned, and that expected logging has happened.


 */
