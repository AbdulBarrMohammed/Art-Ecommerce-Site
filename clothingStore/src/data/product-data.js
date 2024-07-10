import cpOne from '../images/colored-pencils/cp1.jpg'
import cpTwo from '../images/colored-pencils/cp2.jpg'
import cpThree from '../images/colored-pencils/cp3.jpg'
import cpFour from '../images/colored-pencils/cp4.jps.jpg'
import cpFive from '../images/colored-pencils/cp5.jpg'
import cpSix from '../images/colored-pencils/cp6.jpg'


import m1 from '../images/markers/m1.jpg';
import m2 from '../images/markers/m2.jpg';
import m3 from '../images/markers/m3.jpg';
import m4 from '../images/markers/m4.jpg';
import m5 from '../images/markers/m5.jpg';
import m6 from '../images/markers/m6.jpg';


import p1 from '../images/paint/p1.jpg'
import p2 from '../images/paint/p2.jpg'
import p3 from '../images/paint/p3.jpg'
import p4 from '../images/paint/p4.jpg'
import p5 from '../images/paint/p5.jpg'
import p6 from '../images/paint/p6.jpg'

import pb1 from '../images/paint-brushes/pb1.jpg'
import pb2 from '../images/paint-brushes/pb2.jpg'
import pb3 from '../images/paint-brushes/pb3.jpg'
import pb4 from '../images/paint-brushes/pb4.jpg'
import pb5 from '../images/paint-brushes/pb5.jpg'
import pb6 from '../images/paint-brushes/pb6.jpg'


export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,

    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  export const paintbrushData = [
    {
        id: 'pb1',
        imageurl: pb1,
        name: 'Winsor & Newton Series 7',
        price: "$25.99",
        descriptionTitle: 'Winsor & Newton Series 7 Kolinsky Sable Watercolor Brush',
        description: 'Winsor & Newton Series 7 brushes are crafted from the finest Kolinsky sable hair, ensuring excellent spring, point, and color-holding capacity. These brushes are ideal for watercolor painting, offering artists precision and control for detailed work.',
        rating: 4.8,
        reviewCount: 150
    },
    {
        id: 'pb2',
        imageurl: pb2,
        name: 'Princeton Velvetouch',
        price: "$14.99",
        descriptionTitle: 'Princeton Velvetouch Mixed Media Brushes',
        description: 'Princeton Velvetouch brushes are designed for mixed media artists. They feature a unique blend of synthetic fibers that mimic natural hair, providing excellent performance with acrylics, watercolors, and oils. The soft grip handle ensures comfort during long painting sessions.',
        rating: 4.6,
        reviewCount: 200
    },
    {
        id: 'pb3',
        imageurl: pb3,
        name: 'Da Vinci Maestro',
        price: "$29.99",
        descriptionTitle: 'Da Vinci Maestro Kolinsky Red Sable Brush',
        description: 'The Da Vinci Maestro brush is made from pure Kolinsky red sable hair, offering superior control and fluid retention. This brush is perfect for fine details and glazing techniques in watercolor painting. It is handcrafted in Germany for professional artists.',
        rating: 4.9,
        reviewCount: 120
    },
    {
        id: 'pb4',
        imageurl: pb4,
        name: 'Escoda Versatil',
        price: "$19.99",
        descriptionTitle: 'Escoda Versatil Synthetic Kolinsky Watercolor Brush',
        description: 'Escoda Versatil brushes are a synthetic alternative to Kolinsky sable, offering similar performance at a lower price. These brushes have excellent spring and snap, making them suitable for watercolor and acrylic painting. The durable synthetic fibers ensure long-lasting use.',
        rating: 4.7,
        reviewCount: 180
    },
    {
        id: 'pb5',
        imageurl: pb5,
        name: 'Silver Brush Black Velvet',
        price: "$22.99",
        descriptionTitle: 'Silver Brush Black Velvet Watercolor Brush',
        description: 'Silver Brush Black Velvet brushes combine natural squirrel hair with synthetic fibers, providing a luxurious feel and exceptional performance. These brushes are perfect for watercolor washes and fine details, offering excellent color-carrying capacity and a smooth application.',
        rating: 4.8,
        reviewCount: 140
    },
    {
        id: 'pb6',
        imageurl: pb6,
        name: 'Grumbacher Golden Edge',
        price: "$12.99",
        descriptionTitle: 'Grumbacher Golden Edge Acrylic & Oil Brush',
        description: 'Grumbacher Golden Edge brushes are designed for use with acrylics and oils. They feature golden synthetic bristles that maintain their shape and stiffness, providing excellent control and precision. These brushes are perfect for both detailed work and large areas.',
        rating: 4.5,
        reviewCount: 160
    }
];

export const markersData = [
  {
      id: 'm1',
      imageurl: m1,
      name: '24 Crayola Markers',
      price: "$10.99",
      descriptionTitle: 'Set of 24 Vibrant Crayola Markers',
      description: 'This set includes 24 vibrant Crayola markers that are perfect for coloring, drawing, and crafting. The markers feature a fine tip for detailed work and a broad side for coloring larger areas. They are non-toxic, washable, and suitable for use on a variety of surfaces, making them ideal for both children and adults.',
      rating: 4.7,
      reviewCount: 220
  },
  {
      id: 'm2',
      imageurl: m2,
      name: 'Sharpie Fine Point',
      price: "$19.99",
      descriptionTitle: 'Sharpie Fine Point Markers for Precise Marking',
      description: 'Sharpie Fine Point markers are known for their precision and durability. These markers feature a fine tip that allows for detailed writing and drawing on various surfaces, including paper, plastic, metal, and more. The quick-drying, fade-resistant ink ensures your work remains sharp and vibrant over time.',
      rating: 4.8,
      reviewCount: 350
  },
  {
      id: 'm3',
      imageurl: m3,
      name: 'Copic Sketch',
      price: "$12.99",
      descriptionTitle: 'Copic Sketch Markers for Professional Artistry',
      description: 'Copic Sketch markers are a favorite among professional artists and illustrators. They offer a smooth, consistent flow of ink and feature a dual-tip design with a flexible brush tip on one end and a chisel tip on the other. The markers are refillable and the nibs are replaceable, making them a long-lasting investment for any artist.',
      rating: 4.9,
      reviewCount: 180
  },
  {
      id: 'm4',
      imageurl: m4,
      name: 'Sharpie the Ultimate Collection Ultime',
      price: "$32.99",
      descriptionTitle: 'Sharpie the Ultimate Collection for Comprehensive Use',
      description: 'The Sharpie Ultimate Collection includes a wide variety of marker types and colors, perfect for any project. This set features fine point, ultra-fine point, and chisel tip markers in an array of vibrant colors. The permanent, quick-drying ink writes on most surfaces and is water and fade-resistant, ensuring your creations last.',
      rating: 4.6,
      reviewCount: 140
  },
  {
      id: 'm5',
      imageurl: m5,
      name: 'Cra-Z-Art Classic Markers',
      price: "$5.99",
      descriptionTitle: 'Cra-Z-Art Classic Markers for Everyday Use',
      description: 'Cra-Z-Art Classic Markers are ideal for everyday use at home, school, or the office. These markers feature durable tips and vibrant, washable ink that is safe for children. The set includes a range of colors, allowing for creative expression in drawing, coloring, and crafting projects.',
      rating: 4.4,
      reviewCount: 90
  },
  {
      id: 'm6',
      imageurl: m6,
      name: '10 Classic Crayola Markers',
      price: "$12.99",
      descriptionTitle: 'Set of 10 Classic Crayola Markers',
      description: 'This set of 10 Classic Crayola Markers is perfect for young artists. The markers are designed with a broad line tip for drawing thick or thin lines and come in classic colors that are vibrant and long-lasting. They are washable, non-toxic, and designed for easy cleanup, making them perfect for kids.',
      rating: 4.7,
      reviewCount: 160
  }
];




export const paintData = [
  {
      id: 'p1',
      imageurl: p1,
      name: 'Craft Smart Acrylic Paint',
      price: "$10.99",
      descriptionTitle: 'Versatile Craft Smart Acrylic Paint',
      description: 'Craft Smart Acrylic Paint is ideal for a variety of craft projects. This paint is known for its rich pigments and smooth application, making it perfect for both beginners and experienced artists. It adheres well to a variety of surfaces including canvas, wood, fabric, and more.',
      rating: 4.5,
      reviewCount: 180
  },
  {
      id: 'p2',
      imageurl: p2,
      name: 'Artecho Acrylic Paint',
      price: "$24.99",
      descriptionTitle: 'High-Quality Artecho Acrylic Paint',
      description: 'Artecho Acrylic Paint is designed for artists seeking vibrant and long-lasting colors. This set includes a range of hues that blend easily, allowing for a wide variety of creative projects. The paint is non-toxic, quick-drying, and suitable for use on multiple surfaces such as canvas, paper, and wood.',
      rating: 4.7,
      reviewCount: 240
  },
  {
      id: 'p3',
      imageurl: p3,
      name: '12 Color Oil Paint',
      price: "$12.99",
      descriptionTitle: 'Rich and Vibrant 12 Color Oil Paint Set',
      description: 'This 12 Color Oil Paint set offers rich, vibrant colors that are perfect for creating detailed and expressive artworks. The high-quality pigments provide excellent coverage and blend smoothly, allowing artists to achieve a range of effects. Ideal for both students and professional artists.',
      rating: 4.6,
      reviewCount: 150
  },
  {
      id: 'p4',
      imageurl: p4,
      name: 'Cobra Oil Paint',
      price: "$32.99",
      descriptionTitle: 'Premium Cobra Oil Paint for Artists',
      description: 'Cobra Oil Paint is a premium choice for artists looking for high-quality, water-mixable oil paints. These paints offer the same rich, buttery consistency and vibrant colors as traditional oils, but can be easily thinned and cleaned with water. Perfect for artists seeking both quality and convenience.',
      rating: 4.8,
      reviewCount: 130
  },
  {
      id: 'p5',
      imageurl: p5,
      name: '60 Color Acrylic Paint Set',
      price: "$49.99",
      descriptionTitle: 'Comprehensive 60 Color Acrylic Paint Set',
      description: 'This 60 Color Acrylic Paint Set provides a comprehensive range of colors for all your artistic needs. The paints are highly pigmented and blend smoothly, making them perfect for both detailed work and large-scale projects. They are suitable for use on a variety of surfaces including canvas, wood, and fabric.',
      rating: 4.9,
      reviewCount: 300
  },
  {
      id: 'p6',
      imageurl: p6,
      name: 'Apple Barrel Acrylic Paint',
      price: "$12.99",
      descriptionTitle: 'Affordable Apple Barrel Acrylic Paint',
      description: 'Apple Barrel Acrylic Paint is a budget-friendly option that doesn’t compromise on quality. This paint is easy to work with and provides excellent coverage, making it perfect for a wide range of craft and DIY projects. It is non-toxic and water-based, ensuring safety and easy cleanup.',
      rating: 4.4,
      reviewCount: 110
  }
];



export const coloredPencilsData = [
  {
      id: 'cp1',
      imageurl: cpOne,
      name: '24 Multi-Colored Pencils',
      price: "$12.99",
      descriptionTitle: 'Vibrant and Versatile',
      description: 'A vibrant set of 24 multi-colored pencils, perfect for artists and hobbyists alike. These pencils offer rich, bold colors that are ideal for drawing, sketching, and coloring. The smooth texture and high-quality pigment ensure your artwork will stand out. Each pencil is pre-sharpened and encased in durable wood for easy handling.',
      rating: 4.6,
      reviewCount: 200
  },
  {
      id: 'cp2',
      imageurl: cpTwo,
      name: '24 Crayola Colored Pencils',
      price: "$4.99",
      descriptionTitle: 'Affordable Quality',
      description: 'This affordable set of 24 Crayola colored pencils is perfect for students and beginners. Known for their reliability and consistent quality, Crayola colored pencils provide vibrant colors and smooth application. They are pre-sharpened and made from reforested wood, making them an eco-friendly choice for all your creative projects.',
      rating: 4.5,
      reviewCount: 180
  },
  {
      id: 'cp3',
      imageurl: cpThree,
      name: '50 Crayola Colored Pencils',
      price: "$5.99",
      descriptionTitle: 'Extensive Color Range',
      description: 'Expand your creative horizons with this extensive set of 50 Crayola colored pencils. Offering a wide range of colors, this set is ideal for detailed artwork and coloring. Each pencil is crafted with durable wood and high-quality pigments, ensuring smooth, even color application. Perfect for artists of all levels who need a diverse palette at their fingertips.',
      rating: 4.7,
      reviewCount: 250
  },
  {
      id: 'cp4',
      imageurl: cpFour,
      name: 'Crayola 24 Colored Set',
      price: "$32.99",
      descriptionTitle: 'Professional-Grade Quality',
      description: 'Experience professional-grade quality with Crayloa colored pencils. This set is designed for serious artists who demand the best. The pencils feature rich, vibrant pigments and a soft, thick core that ensures smooth, even coverage. Ideal for blending and shading, these pencils offer unparalleled color saturation and durability.',
      rating: 4.8,
      reviewCount: 100
  },
  {
      id: 'cp5',
      imageurl: cpFive,
      name: 'Prismacolor 24 Colored Pencils',
      price: "$39.99",
      descriptionTitle: 'Vibrant and Versatile',
      description: 'A vibrant set of 24 multi-colored pencils, perfect for artists and hobbyists alike. These pencils offer rich, bold colors that are ideal for drawing, sketching, and coloring. The smooth texture and high-quality pigment ensure your artwork will stand out. Each pencil is pre-sharpened and encased in durable wood for easy handling.',
      rating: 4.9,
      reviewCount: 150
  },
  {
      id: 'cp6',
      imageurl: cpSix,
      name: 'Prismacolor Multi Colored Set',
      price: "$99.99",
      descriptionTitle: 'Vibrant and Versatile',
      description: 'A vibrant set of 100 multi-colored pencils, perfect for artists and hobbyists alike. These pencils offer rich, bold colors that are ideal for drawing, sketching, and coloring. The smooth texture and high-quality pigment ensure your artwork will stand out. Each pencil is pre-sharpened and encased in durable wood for easy handling.',
      rating: 4.9,
      reviewCount: 300
  }
];









export const productData = [
    paintData,
    paintbrushData,
    markersData,
    coloredPencilsData,

  ];

  export const dealsData = [
    {
        id: 'cp3',
        imageurl: cpThree,
        name: '50 Crayola Colored Pencils',
        price: "$5.99",
        originalPrice:  "$15.99",
        descriptionTitle: 'Extensive Color Range',
        description: 'Expand your creative horizons with this extensive set of 50 Crayola colored pencils. Offering a wide range of colors, this set is ideal for detailed artwork and coloring. Each pencil is crafted with durable wood and high-quality pigments, ensuring smooth, even color application. Perfect for artists of all levels who need a diverse palette at their fingertips.',
        rating: 4.7,
        reviewCount: 250
    },

    {
        id: 'm2',
        imageurl: m2,
        name: 'Sharpie Fine Point',
        price: "$19.99",
        originalPrice:  "$59.99",
        descriptionTitle: 'Sharpie Fine Point Markers for Precise Marking',
        description: 'Sharpie Fine Point markers are known for their precision and durability. These markers feature a fine tip that allows for detailed writing and drawing on various surfaces, including paper, plastic, metal, and more. The quick-drying, fade-resistant ink ensures your work remains sharp and vibrant over time.',
        rating: 4.8,
        reviewCount: 350
    },

    {
        id: 'p1',
        imageurl: p1,
        name: 'Craft Smart Acrylic Paint',
        price: "$10.99",
        originalPrice:  "$19.99",
        descriptionTitle: 'Versatile Craft Smart Acrylic Paint',
        description: 'Craft Smart Acrylic Paint is ideal for a variety of craft projects. This paint is known for its rich pigments and smooth application, making it perfect for both beginners and experienced artists. It adheres well to a variety of surfaces including canvas, wood, fabric, and more.',
        rating: 4.5,
        reviewCount: 180
    },

    {
        id: 'pb6',
        imageurl: pb6,
        name: 'Grumbacher Golden Edge',
        price: "$12.99",
        originalPrice:  "$29.99",
        descriptionTitle: 'Grumbacher Golden Edge Acrylic & Oil Brush',
        description: 'Grumbacher Golden Edge brushes are designed for use with acrylics and oils. They feature golden synthetic bristles that maintain their shape and stiffness, providing excellent control and precision. These brushes are perfect for both detailed work and large areas.',
        rating: 4.5,
        reviewCount: 160
    },

    {
        id: 'm5',
        imageurl: m5,
        name: 'Cra-Z-Art Classic Markers',
        price: "$5.99",
        originalPrice:  "$19.99",
        descriptionTitle: 'Cra-Z-Art Classic Markers for Everyday Use',
        description: 'Cra-Z-Art Classic Markers are ideal for everyday use at home, school, or the office. These markers feature durable tips and vibrant, washable ink that is safe for children. The set includes a range of colors, allowing for creative expression in drawing, coloring, and crafting projects.',
        rating: 4.4,
        reviewCount: 90
    },

    {
        id: 'pb4',
        imageurl: pb4,
        name: 'Escoda Versatil',
        price: "$19.99",
        originalPrice:  "$39.99",
        descriptionTitle: 'Escoda Versatil Synthetic Kolinsky Watercolor Brush',
        description: 'Escoda Versatil brushes are a synthetic alternative to Kolinsky sable, offering similar performance at a lower price. These brushes have excellent spring and snap, making them suitable for watercolor and acrylic painting. The durable synthetic fibers ensure long-lasting use.',
        rating: 4.7,
        reviewCount: 180
    },

  ];
