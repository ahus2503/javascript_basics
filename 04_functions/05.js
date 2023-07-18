function get_grade(grade){
    
    if (grade > 80) {
        console.log("A")
    } else if (grade > 70) {
        console.log("B")
    } else if (grade > 60) {
      console.log("C") 
    } else if (grade > 50) {
        console.log("D")
    }else 
    {
        console.log("F")
    }    
} 
get_grade(56)