from .gfpgan_model import GFPGANModel
from .chat_model import ChatModel

# Initialize models
gfpgan_model = GFPGANModel()
chat_model = ChatModel()

# You can add more model initializations here as your application grows

# Export the initialized models
__all__ = ['gfpgan_model', 'chat_model']
