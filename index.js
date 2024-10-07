document.addEventListener("DOMContentLoaded", () => {
    const gradeSection = document.querySelector('.gradings');

    fetch('data.json')
    .then(Response =>{
        if(!Response.ok){
            throw new Error('Network response was bad');
        }
        return Response.json();
    })
    .then(data => {
        
        gradeSection.innerHTML = data.map((items,index) => {
            let bgColor;
            let color;
            switch(items.category){
                case "Reaction":
                    bgColor = 'hsl(0, 100%, 98%)';
                    color = 'hsl(0, 100%, 67%)';
                    break;
                case "Memory":
                    bgColor = 'hsl(39, 100%, 98%)';
                    color = 'hsl(39, 100%, 56%)';
                    break;
                case "Verbal":
                    bgColor = 'hsl(166, 100%, 98%)';
                    color = ' hsl(166, 100%, 37%)';
                    break;
                case "Visual":
                    bgColor = 'hsla(256, 72%, 98%, 1)';
                    color = 'hsla(256, 72%, 46%, 1)';
                    break;
                default:
                    bgColor = 'white'
                    color = 'black';
            }
            
            return`
                <div class ="grades" key = ${index}
                    style = "background-color: ${bgColor};
                    color:${color};"
                >
                    <div class= "flex-left">
                        <img 
                            src = ${items.icon}    
                            alt= ${items.category}-icon
                        />
                        <p class = "grade--text">
                            ${items.category}
                        </p>
                    </div>
                    <p class = "grade--value">
                        ${items.score} 
                        <span class ="value--percent">/ 100</span>
                    </p>
                </div>
            `
        }).join('');
    })
    .catch(error => {
        console.error('Error occurred while fetching data',error)
    })
})