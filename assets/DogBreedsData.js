// We will be importing dynamic data to be used in our app, feel free to add object data to this array in the format shown below and see what
const data = [
    {
        name: 'Beagle',
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/beagle-card-small.jpg?bust=1535569260',
        description: `The beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare.`
    },
    {
        name: 'Chihuahua',
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/chihuahua-card-small.jpg?bust=1535568982',
        description: `The Chihuahua is graceful, small, and compact, slightly longer than they are tall. The Chihuahua has a saucy expression and alert, terrier-like attitude. The coat can be smooth, with soft, glossy hair, or long, with soft straight or wavy coats and fringed ears.`
    },
    {
        name: 'French Bulldog',
        image: 'https://us.123rf.com/450wm/pascalk/pascalk1905/pascalk190500056/134720673-portrait-of-a-cute-black-french-bulldog-smiling-purebred-dog-.jpg?ver=6',
        description: `The French Bulldog is a breed of domestic dog. They are the result of a cross between Toy Bulldogs imported from England and local ratters in Paris, France, in the 1800s.`
    },
    {
        name: 'German Shephard',
        image: 'https://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg',
        description: `The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. In the English language, the breed's officially recognized name is German Shepherd Dog`
    },
    {
        image: 'https://thehappypuppysite.com/wp-content/uploads/2017/10/goldie.jpg',
        name: 'Golden Retriever',
        description: `The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth.`
    },
    {
        name: 'Shiba Inu',
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-card-small.jpg',
        description: `The Shiba Inu is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
        name: 'Siberian Husky',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-with-blue-eyes-siberian-husky-1576852935.jpg',
        description: `The Siberian Husky is a medium-sized working dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than a very similar-looking dog, the Alaskan Malamute.`
    },
    {
        name: 'Pomeranian',
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/72160e4/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F29%2Fac3ff0a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-3-645mk062811.jpg',
        description: `The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.`
    },
    {
        name: 'Pug',
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/354d0cf/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fdc%2Fc4%2F8ccd3a28438d81b2f2f5d8031a05%2Fpug-ap-r82p3q-645.jpg',
        description: `The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.`
    }
];

// Export default tells JavaScript that this is the only export from this file
export default data;