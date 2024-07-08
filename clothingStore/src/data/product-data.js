import cpOne from '../images/colored-pencils/cp1.jpg'
import cpTwo from '../images/colored-pencils/cp2.jpg'
import cpThree from '../images/colored-pencils/cp3.jpg'
import cpFour from '../images/colored-pencils/cp4.jps.jpg'
import cpFive from '../images/colored-pencils/cp5.jpg'


import m1 from '../images/markers/m1.jpg';
import m2 from '../images/markers/m2.jpg';
import m3 from '../images/markers/m3.jpg';
import m4 from '../images/markers/m4.jpg';
import m5 from '../images/markers/m5.jpg';
import m6 from '../images/markers/m6.jpg';


import pOne from '../images/paint/p1.jpg'
import pbOne from '../images/paint-brushes/pb1.jpg'
import mOne from '../images/markers/m4.jpg'
import pbTwo from '../images/paint-brushes/pb2.jpg'

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

  export const markersData = [
    {
      id: 'm1',
      imageurl: m1,
      name: '24 Crayola Markers',
      price: "$10.99",
      descriptionTitle: 'Set of 24 Vibrant Crayola Markers',
      description: 'This set includes 24 vibrant Crayola markers that are perfect for coloring, drawing, and crafting. The markers feature a fine tip for detailed work and a broad side for coloring larger areas. They are non-toxic, washable, and suitable for use on a variety of surfaces, making them ideal for both children and adults.'
    },
    {
      id: 'm2',
      imageurl: m2,
      name: 'Sharpie Fine Point',
      price: "$19.99",
      descriptionTitle: 'Sharpie Fine Point Markers for Precise Marking',
      description: 'Sharpie Fine Point markers are known for their precision and durability. These markers feature a fine tip that allows for detailed writing and drawing on various surfaces, including paper, plastic, metal, and more. The quick-drying, fade-resistant ink ensures your work remains sharp and vibrant over time.'
    },
    {
      id: 'm3',
      imageurl: m3,
      name: 'Copic Sketch',
      price: "$12.99",
      descriptionTitle: 'Copic Sketch Markers for Professional Artistry',
      description: 'Copic Sketch markers are a favorite among professional artists and illustrators. They offer a smooth, consistent flow of ink and feature a dual-tip design with a flexible brush tip on one end and a chisel tip on the other. The markers are refillable and the nibs are replaceable, making them a long-lasting investment for any artist.'
    },
    {
      id: 'm4',
      imageurl: m4,
      name: 'Sharpie the Ultimate Collection Ultime',
      price: "$32.99",
      descriptionTitle: 'Sharpie the Ultimate Collection for Comprehensive Use',
      description: 'The Sharpie Ultimate Collection includes a wide variety of marker types and colors, perfect for any project. This set features fine point, ultra-fine point, and chisel tip markers in an array of vibrant colors. The permanent, quick-drying ink writes on most surfaces and is water and fade-resistant, ensuring your creations last.'
    },
    {
      id: 'm5',
      imageurl: m5,
      name: 'Cra-Z-Art Classic Markers',
      price: "$5.99",
      descriptionTitle: 'Cra-Z-Art Classic Markers for Everyday Use',
      description: 'Cra-Z-Art Classic Markers are ideal for everyday use at home, school, or the office. These markers feature durable tips and vibrant, washable ink that is safe for children. The set includes a range of colors, allowing for creative expression in drawing, coloring, and crafting projects.'
    },
    {
      id: 'm6',
      imageurl: m6,
      name: '10 Classic Crayola Markers',
      price: "$12.99",
      descriptionTitle: 'Set of 10 Classic Crayola Markers',
      description: 'This set of 10 Classic Crayola Markers is perfect for young artists. The markers are designed with a broad line tip for drawing thick or thin lines and come in classic colors that are vibrant and long-lasting. They are washable, non-toxic, and designed for easy cleanup, making them perfect for kids.'
    }
  ];











  export const coloredPencilsData = [
    {
      id: 'cp1',
      imageurl: cpOne,
      name: '24 Multi-Colored Pencils',
      price: "$12.99",
      descriptionTitle: 'Vibrant and Versatile',
      description: 'A vibrant set of 24 multi-colored pencils, perfect for artists and hobbyists alike. These pencils offer rich, bold colors that are ideal for drawing, sketching, and coloring. The smooth texture and high-quality pigment ensure your artwork will stand out. Each pencil is pre-sharpened and encased in durable wood for easy handling.'
    },
    {
      id: 'cp2',
      imageurl: cpFour,
      name: '24 Crayola Colored Pencils',
      price: "$4.99",
      descriptionTitle: 'Affordable Quality',
      description: 'This affordable set of 24 Crayola colored pencils is perfect for students and beginners. Known for their reliability and consistent quality, Crayola colored pencils provide vibrant colors and smooth application. They are pre-sharpened and made from reforested wood, making them an eco-friendly choice for all your creative projects.'
    },
    {
      id: 'cp3',
      imageurl: cpThree,
      name: '50 Crayola Colored Pencils',
      price: "$15.99",
      descriptionTitle: 'Extensive Color Range',
      description: 'Expand your creative horizons with this extensive set of 50 Crayola colored pencils. Offering a wide range of colors, this set is ideal for detailed artwork and coloring. Each pencil is crafted with durable wood and high-quality pigments, ensuring smooth, even color application. Perfect for artists of all levels who need a diverse palette at their fingertips.'
    },
    {
      id: 'cp4',
      imageurl: cpFive,
      name: 'Prismacolor Premier Colored Pencils',
      price: "$32.99",
      descriptionTitle: 'Professional-Grade Quality',
      description: 'Experience professional-grade quality with Prismacolor Premier colored pencils. This set is designed for serious artists who demand the best. The pencils feature rich, vibrant pigments and a soft, thick core that ensures smooth, even coverage. Ideal for blending and shading, these pencils offer unparalleled color saturation and durability.'
    },
    {
      id: 'cp5',
      imageurl: cpOne,
      name: '24 Multi-Colored Pencils',
      price: "$12.99",
      descriptionTitle: 'Vibrant and Versatile',
      description: 'A vibrant set of 24 multi-colored pencils, perfect for artists and hobbyists alike. These pencils offer rich, bold colors that are ideal for drawing, sketching, and coloring. The smooth texture and high-quality pigment ensure your artwork will stand out. Each pencil is pre-sharpened and encased in durable wood for easy handling.'
    },
    {
      id: 'cp6',
      imageurl: cpOne,
      name: '24 Multi-Colored Pencils',
      price: "$12.99",
      descriptionTitle: 'Vibrant and Versatile',
      description: 'A vibrant set of 24 multi-colored pencils, perfect for artists and hobbyists alike. These pencils offer rich, bold colors that are ideal for drawing, sketching, and coloring. The smooth texture and high-quality pigment ensure your artwork will stand out. Each pencil is pre-sharpened and encased in durable wood for easy handling.'
    }
  ];



export const productData = [
    {
      id: 1,
      imageurl: cpOne,
      name: "Colored Pencils",
      price: "$19.99",
      description: "Some text about the product..",
    },
    {
      id: 2,
      imageurl: pOne,
      name: "Paint",
      price: "$21.99",
      description: "Some text about the product..",
    },
    {
      id: 3,
      imageurl: pbOne,
      name: "Paint Brush",
      price: "$99.99",
      description: "Some text about the product..",
    },
    {
      id: 4,
      imageurl: mOne,
      name: "Markers",
      price: "$14.99",
      description: "Some text about the product..",
    },
    {
      id: 5,
      imageurl: pbTwo,
      name: "Paint brush",
      price: "$38.99",
      description: "Some text about the product..",
    },
    {
      id: 6,
      imageurl: pOne,
      name: "Coco Noir",
      price: "$149.99",
      description: "Some text about the product..",
    },
    {
      id: 7,
      imageurl: mOne,
      name: "Markers Two",
      price: "$38.99",
      description: "Some text about the product..",
    },
    {
      id: 8,
      imageurl: pbTwo,
      name: "Dove cream",
      price: "$49.99",
      description: "Some text about the product..",
    },
  ];
