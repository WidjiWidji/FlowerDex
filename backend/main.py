from typing import Optional

from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile, Body, Form
import cv2
import numpy as np
from models import *
from PIL import Image
import aiofiles
import tensorflow as tf
from ml import *
from typing import List
import databases
import sqlalchemy
from pydantic import BaseModel
from datetime import datetime

DATABASE_URL = "postgresql://kyizpcbvekfcgm:9b158a5cabf275b8dd985c68bc0e785c0f4c584e639ee58b3baa300b7ee180e8@ec2-34-231-63-30.compute-1.amazonaws.com:5432/d5o272tm64so8r"

database = databases.Database(DATABASE_URL)

engine = sqlalchemy.create_engine(
    DATABASE_URL
)
metadata = sqlalchemy.MetaData()
app = FastAPI()
#intilize machine learning class
model = PredictModel()  

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

#table
userdata = sqlalchemy.Table(
    "userdata",
    metadata,
    sqlalchemy.Column("userid", sqlalchemy.String, primary_key=True),
    sqlalchemy.Column("daisy", sqlalchemy.Boolean),
    sqlalchemy.Column("dandelion", sqlalchemy.Boolean),
    sqlalchemy.Column("rose", sqlalchemy.Boolean),
    sqlalchemy.Column("sunflower", sqlalchemy.Boolean),
    sqlalchemy.Column("tulip", sqlalchemy.Boolean),
)

#Return model
class UserData(BaseModel):
    # # id: int
    daisy: bool
    dandelion: bool
    rose: bool
    sunflower: bool
    tulip: bool

@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}

@app.post("/newuser")
async def newUser(item: Item):
    query = userdata.insert([item.uid, False, False, False, False, False])
    return await database.fetch_all(query)


@app.post("/config", response_model=List[UserData])
async def getinfo(item: Item):
    query = userdata.select().where(userdata.c.userid == item.uid)
    return await database.fetch_all(query)

@app.post("/uploadfile")
async def create_upload_file(file: UploadFile = File(...), id: str = Form(...)):
    print(id)
    content = await file.read()
    nparr = np.fromstring(content, np.uint8)
    img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR) 
    ret = model.predict(img_np)
    # string = ret
    if ret == 'daisy':
        query = userdata.update().where(userdata.c.userid == id).values(daisy=True)
    elif ret == 'rose':
         query = userdata.update().where(userdata.c.userid == id).values(rose=True)
    elif ret == 'dandelion':
         query = userdata.update().where(userdata.c.userid == id).values(dandelion=True)
    elif ret == 'tulip':
         query = userdata.update().where(userdata.c.userid == id).values(tulip=True)
    elif ret == 'sunflower':
         query = userdata.update().where(userdata.c.userid == id).values(sunflower=True)

    return await database.fetch_all(query)


    # return {"file_size": len(file)}


@app.post("/test")
async def upload_image():
    sunflower_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/592px-Red_sunflower.jpg"
    sunflower_path = tf.keras.utils.get_file('Red_sunflower', origin=sunflower_url)
    ret = model.predict(sunflower_path)
    return(ret)
  