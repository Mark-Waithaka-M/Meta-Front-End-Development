var light = 'orange';

// if (light == 'green'){
//     console.log('Drive')
// }else if(light == 'orange'){
//     console.log('Get ready')
// }else if(light == 'red'){
//     console.log('Stop driving')
// }else{
//     console.log('The light is not green, orange or red')
// }


switch(light){
    case 'green':
        console.log('Drive');
        break;
    
    case 'orange':
        console.log('Get ready');
        break;
    
    case 'red':
        console.log('Stop driving')
        break;
    
    default:
        console.log('The light is not green, orange or red')
        break;
}