package com.project.controller;
import com.project.dto.ProductDto;
import com.project.model.Product;
import com.project.service.IProductService;
import org.apache.tomcat.util.http.parser.Cookie;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<Product>> findAll(@RequestParam(defaultValue = "") String name,
                                                 @RequestParam(defaultValue = "") String idCategory) {
        List<Product> productList = productService.findAll(name, idCategory);

        if(productList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/smartPhone")
    public ResponseEntity<List<Product>> findAllSmartPhone(@RequestParam String name) {
        List<Product> productList = productService.findAllSmartPhone(name);

        if(productList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/smartWatch")
    public ResponseEntity<List<Product>> findAllSmartWatch(@RequestParam String name) {
        List<Product> productList = productService.findAllSmartWatch(name);

        if(productList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findByIdProduct(@PathVariable Integer id){

        Product product = productService.findById(id);
        if(product == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
        if(id == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
       productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@Valid @RequestBody ProductDto productDto, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if(productDto == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        productService.createProduct(productDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @Valid @RequestBody ProductDto productDto, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Product product = productService.findById(id);
        productService.updateProduct(productDto);
        BeanUtils.copyProperties(productDto, product);

        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @PatchMapping("/update/{id}")
//    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody Product product) {
//        if(product == null){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        ProductDto productDto = new ProductDto();
//        BeanUtils.copyProperties(product, productDto);
//        productService.updateProduct(productDto);
//
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
