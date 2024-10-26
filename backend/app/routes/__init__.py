from fastapi import APIRouter
from .chat import router as chat_router
from .image_restoration import router as image_restoration_router

router = APIRouter()

router.include_router(chat_router, prefix="/chat", tags=["chat"])
router.include_router(image_restoration_router, prefix="/image", tags=["image"])

# You can add more routers here as your application grows
