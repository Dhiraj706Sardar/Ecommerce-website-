package com.ecommerce.app.service;

import com.ecommerce.app.model.Product;
import com.ecommerce.app.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.UUID;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> getAllProducts(String query) {
        if (query != null && !query.isEmpty()) {
            return productRepository.searchProducts(query);
        }
        return productRepository.findAll();
    }

    public Product getProductById(UUID id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + id));
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(UUID id, Product productDetails) {
        Product product = getProductById(id);
        product.setTitle(productDetails.getTitle());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setCategory(productDetails.getCategory());
        product.setImage(productDetails.getImage());
        product.setRating(productDetails.getRating());
        return productRepository.save(product);
    }

    public void deleteProduct(UUID id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }
}
