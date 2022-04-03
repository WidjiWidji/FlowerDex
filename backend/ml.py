#import model
from tensorflow import keras
import tensorflow as tf
import numpy as np
import cv2
from PIL import Image


class PredictModel():
    def __init__(self):
        self.height = 180
        self.width = 180
        self.class_names = ['daisy', 'dandelion', 'rose', 'sunflower', 'tulip']

    def predict(self, jpg):
        # img = tf.keras.utils.load_img(
        # jpg, target_size=(self.img_height, self.img_width)
        # )
        dsize = (self.width, self.height)
        temp = cv2.resize(np.array(jpg), dsize)
        # print(temp.shape)
        im_pil = Image.fromarray(temp)
        
        img_array = tf.keras.utils.img_to_array(im_pil)
        img_array = tf.expand_dims(img_array, 0) # Create a batch
    
        #this loads the new model
        model = keras.models.load_model('./saved_model/flower_model')


        #compile model
        model.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])
        
        #predict results using model
        predictions = model.predict(img_array)
        score = tf.nn.softmax(predictions[0])

        print(
            "This image most likely belongs to {} with a {:.2f} percent confidence."
            .format(self.class_names[np.argmax(score)], 100 * np.max(score))
        )
        return(self.class_names[np.argmax(score)])




# sunflower_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/592px-Red_sunflower.jpg"
# sunflower_path = tf.keras.utils.get_file('Red_sunflower', origin=sunflower_url)









