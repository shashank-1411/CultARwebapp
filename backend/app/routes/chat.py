from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class ChatMessage(BaseModel):
    message: str

@router.post("/send")
async def send_message(chat_message: ChatMessage):
    # Your chat logic here
    return {"response": f"Received: {chat_message.message}"}
