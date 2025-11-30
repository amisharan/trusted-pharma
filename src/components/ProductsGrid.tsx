"use client";

import ProductCard from "./ProductCard";

const products = [
    {
        name: "Paracetamol",
        strength: "500mg",
        category: "Analgesics",
        form: "Tablet",
        packaging: "Blister Pack (10x10)",
        indication: "Fever, Pain Relief",
    },
    {
        name: "Paracetamol",
        strength: "500mg",
        category: "Analgesics",
        form: "Tablet",
        packaging: "Blister Pack (10x10)",
        indication: "Fever, Pain Relief",
    },
    {
        name: "Paracetamol",
        strength: "500mg",
        category: "Analgesics",
        form: "Tablet",
        packaging: "Blister Pack (10x10)",
        indication: "Fever, Pain Relief",
    },
    {
        name: "Paracetamol",
        strength: "500mg",
        category: "Analgesics",
        form: "Tablet",
        packaging: "Blister Pack (10x10)",
        indication: "Fever, Pain Relief",
    },
    {
        name: "Paracetamol",
        strength: "500mg",
        category: "Analgesics",
        form: "Tablet",
        packaging: "Blister Pack (10x10)",
        indication: "Fever, Pain Relief",
    },
    {
        name: "Paracetamol",
        strength: "500mg",
        category: "Analgesics",
        form: "Tablet",
        packaging: "Blister Pack (10x10)",
        indication: "Fever, Pain Relief",
    },
];

export default function ProductsGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
