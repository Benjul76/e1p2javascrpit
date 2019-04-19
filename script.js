
function changeImage(img){
document.getElementById('picture').src=img;
}
</script>

<img src="image1.jpg" id='picture' />

<a onmouseover='changeImage('image1.jpg')' >image01</a>
<a onmouseover='changeImage('image1_2.jpg')' >image2</a>
