import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import Category, Product

def seed_data():
    # Categories
    electronics = Category.objects.get_or_create(
        name='Electronics', 
        image_url='https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800'
    )[0]
    clothing = Category.objects.get_or_create(
        name='Clothing', 
        image_url='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800'
    )[0]
    accessories = Category.objects.get_or_create(
        name='Accessories', 
        image_url='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
    )[0]

    # Products
    products = [
        {
            'category': electronics,
            'name': 'Premium Wireless Headphones',
            'price': 299.99,
            'description': 'Experience pure sound with our flagship wireless headphones.',
            'image_url': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
        },
        {
            'category': electronics,
            'name': 'Mechanical Keyboard',
            'price': 159.00,
            'description': 'RGB Mechanical keyboard with tactile switches.',
            'image_url': 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800'
        },
        {
            'category': electronics,
            'name': 'Smart Watch Series X',
            'price': 399.00,
            'description': 'Track your health and stay connected with the latest smartwatch.',
            'image_url': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
        },
        {
            'category': clothing,
            'name': 'Minimalist Cotton T-Shirt',
            'price': 45.00,
            'description': 'Ultra-soft pima cotton t-shirt for daily comfort.',
            'image_url': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'
        },
        {
            'category': clothing,
            'name': 'Denim Jacket',
            'price': 120.00,
            'description': 'Classic blue denim jacket with a modern fit.',
            'image_url': 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800'
        },
        {
            'category': accessories,
            'name': 'Designer Leather Bag',
            'price': 450.00,
            'description': 'Handcrafted Italian leather bag for professional use.',
            'image_url': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800'
        },
        {
            'category': accessories,
            'name': 'Classic Aviator Sunglasses',
            'price': 180.00,
            'description': 'Timeless aviator design with polarized lenses.',
            'image_url': 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800'
        }
    ]

    for prod_data in products:
        Product.objects.get_or_create(**prod_data)

    print("Database seeded successfully!")

if __name__ == '__main__':
    seed_data()
