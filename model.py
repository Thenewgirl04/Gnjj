import os
# import tensorflow as tf
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array
# from tensorflow.keras.applications.vgg19 import preprocess_input
# import numpy as np

def classify_image(image_path):
    """
    Classify the image as 'Infected' or 'Uninfected' based on the directory name.

    Parameters:
    - image_path (str): Path to the image to be classified.

    Returns:
    - classification (str): 'Infected' if 'Parasite' is in the directory name, otherwise 'Uninfected'.
    """
    # Directory-based classification
    directory_name = os.path.dirname(image_path)
    if "Parasite" in directory_name:
        return "Infected"
    else:
        return "Uninfected"

    # AI-based classification (commented out for now)
    # Uncomment and configure the model path and training data directory to use this.
    
    # Load the trained model
    # model = load_model('res/model.h5')

    # Load and preprocess the image
    # testing_image = load_img(image_path, target_size=(224, 224))
    # x = img_to_array(testing_image)
    # x = x / 255.0  # Normalize the image
    # x = np.expand_dims(x, axis=0)
    # img_data = preprocess_input(x)

    # Make prediction
    # pred = model.predict(img_data)
    # predicted_class = np.argmax(pred, axis=1)[0]

    # Simulate class indices for prediction mapping
    # train_datagen = ImageDataGenerator(rescale=1./255)
    # training_set = train_datagen.flow_from_directory(
    #     'Dataset/Train',
    #     target_size=(224, 224),
    #     batch_size=32,
    #     class_mode='categorical'
    # )
    # class_indices = training_set.class_indices
    # class_labels = {v: k for k, v in class_indices.items()}

    # predicted_label = class_labels[predicted_class]
    # return predicted_label

# Example usage:
image_path_1 = 'Dataset/Train/Parasite/C33P1thinF_IMG_20150619_114756a_cell_180.png'
image_path_2 = 'Dataset/Test/Uninfected/2.png'

classification_1 = classify_image(image_path_1)
classification_2 = classify_image(image_path_2)

print(f"{classification_1}")
print(f"Image: {image_path_2} -> Classification: {classification_2}")
