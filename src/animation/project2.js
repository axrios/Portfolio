const images = importAll(require.context('../images/Project2/animation2', false, /\.(png|jpe?g|svg)$/)); //project2

function importAll(r) { //renders all images into a json object
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  
//THIS IS THE FIRST PROJECT
//
//
function pro2(){
    const div = document.getElementById('project2-2'); //scroll container
    const canvas = document.getElementById("pCards-container2-2"); //canvas for image container
    const context = canvas.getContext("2d"); //setcontext to 2d
  
    const frameCount = 95; //all image counts
    const currentFrame = index => ( //if current frame changes then change image
      images[`a${index}.png`].default
    )
  
  
    //preload images before updating
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);

      }
    };
    //new images
    const img = new Image()
  
    img.src = currentFrame(1);
    canvas.width= 4500
    canvas.height=1660;
    img.onload=function(){
      context.drawImage(img, 0, 0);
    }
  
    //update image
    const updateImage = index => {
      context.opacity = 1;
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0); //draw image
    }
  
    div.addEventListener('scroll', () => {   //on div scroll
      const scrollTop = div.scrollTop; //div top
  
      const maxScrollTop = div.scrollHeight- div.clientHeight; //scrollheight - clientheight gives the max scroll
      const scrollFraction = scrollTop / maxScrollTop;

      console.log(scrollFraction);

      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount) 
      );
      if (scrollFraction > 0.95){
        canvas.style.transform = `translate(0%, -27%)`
      }
      else if (scrollFraction > 0.88)
        canvas.style.transform = `translate(0%, -40%)`
      else(
        canvas.style.transform = `translate(0%, -50%)`
      )
      
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });
  
    preloadImages()
  }

  export default pro2;