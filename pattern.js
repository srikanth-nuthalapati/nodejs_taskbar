// right half pyramid
function rightHalfPyramid(){
let n = 5;
for (i=0;i<n;i++){
    for(j=0;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log();
}
}
// rightHalfPyramid()

//right half pyramid
function leftHalfPyramid(){
    let n = 5;
    for(i=0;i<n;i++){
        for(k=0;k<n-i-1;k++)
            process.stdout.write("  ");
        for(j=0;j<=i;j++)
            process.stdout.write("* ");
        console.log();
    }
}
// leftHalfPyramid()

//full pyramid
function fullPyramid(){
    let n = 5;
    for(i=1;i<=n;i++){
        for(k=0;k<n-i;k++)
            process.stdout.write(" ");
        for(j=1;j<=i;j++)
            process.stdout.write("* ");
        console.log();
    }
}
// fullPyramid()

//inverted right half pym
function invertedRightHalfPyramid(){
    let n = 5;
    for(i=n;i>0;i--){
        for(j=1;j<=i;j++)
            process.stdout.write("* ");
        console.log();
    }
}
// invertedRightHalfPyramid()

//inverted left half pym
function invertedLeftHalfPyramid(){
    let n = 5;
    for(i=n;i>0;i--){
        for(k=n;k>i;k--)
            process.stdout.write("  ");
        for(j=1;j<=i;j++)
            process.stdout.write("* ");
        console.log();
        
    }
}
// invertedRightLeftPyramid()

//inverted full pyramid
function invertedFullPyramid(){
    let n = 5;
    for(i=n;i>0;i--){
        for(k=n;k>i;k--)
            process.stdout.write(" ");
        for(j=1;j<=i;j++)
            process.stdout.write("* ");
        console.log();
        
    }
}
// invertedFullPyramid()

//rhombus pattern
function rhombusPattern(){
    let n = 4;
    for(i=1;i<=n+2;i++){
        for(k=1;k<i;k++)
            process.stdout.write(" ");
        for(j=1;j<=n;j++)
            process.stdout.write("* ");
        console.log();
    }
}
// rhombusPattern()

//diamond pattern
function diamond(){
    let n=4;
    for(i=1;i<=2*n-1;i++){
        let spaces = i<=n?n-i:i-n;
        for(k=1;k<=spaces;k++)
            process.stdout.write(" ");
        let col = i<=n?i:2*n-i;
        for(j=1;j<=col;j++)
            process.stdout.write("* ");
        console.log(); 
    } 
}
// diamond()

//sqr hollow
function sqrHollow(){
    let n = 5;
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(i==1 || i==n || j==1 || j==n)
                process.stdout.write("* ");
            else
            process.stdout.write("  ");
        }
        console.log();
    }
}
// sqrHollow()

//number triangle
function numTriangle(){
    let n = 5;
    for(i=1;i<=n;i++){
        for(k=1;k<=n-i;k++)
            process.stdout.write(" ");
        for(j=1;j<=i;j++)
            process.stdout.write(" " + i);
        console.log();
    }
}
// numTriangle()

//num inc 
function numInc(){
    let n = 4;
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++)
            process.stdout.write(j + " ");
        console.log();
    }
}
// numInc()

//num inc rev
function numIncRev(){
    let n = 4;
    for(i=n;i>0;i--){
        for(j=1;j<=i;j++)
            process.stdout.write(j + " ");
        console.log();
    }
}
// numIncRev()

//num changing
function numChange(){
    let n = 4;
    num = 1;
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++)
            process.stdout.write(num++ + " ");
        console.log();
    }
}
// numChange()

//zero-one
function zeroOne(){
    let n=4;
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            if(i%2!=0 && j%2!=0 || i%2==0 && j%2==0)
                process.stdout.write("1 ");
            else if(i%2==0 && j%2!=0 || i%2!=0 && j%2==0)
                process.stdout.write("0 ");
        }
        console.log();
    }
}
// zeroOne()

//palindrome triangle
function palTri(){
    let n = 4;
    for(i=1;i<=n;i++){
        for(k=1;k<=n-i;k++)
            process.stdout.write("  ");
        for(j=i;j>=1;j--)
            process.stdout.write(j + " ");
        for(j=2;j<=i;j++)
            process.stdout.write(j + " ");
        console.log();
    }
}
// palTri()

//butterfly

function butterfly(){
    n = 3;
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++)
            process.stdout.write("*");
        for(k=1;k<=2*(n-i);k++)
            process.stdout.write(" ");
        for(j=1;j<=i;j++)
            process.stdout.write("*");
        console.log();
    }

    for(i=n-1;i>0;i--){
        for(j=1;j<=i;j++)
            process.stdout.write("*");
        for(k=1;k<=2*(n-i);k++)
            process.stdout.write(" ");
        for(j=i;j>=1;j--)
            process.stdout.write("*");
        console.log();
    }
}
// butterfly()

//sqr fill 
function sqrFill(){
    n=4;
    for(i=0;i<n;i++){
        for(j=0;j<n;j++)
            process.stdout.write("* ")
        console.log();
    }
}
// sqrFill()

//k pattern
function k(){
    n=4;
    for(i=1;i<2*n;i++){
        col = i<=n?n-i+1:i-n+1;
        for(j=1;j<=col;j++)
            process.stdout.write("* ")
        console.log(); 
    }
}
// k()

//rev num tri
function revNumTri(){
    n=4;
    for(i=1;i<=n;i++){
        for(s=1;s<i;s++)
            process.stdout.write(" ")
        for(j=i;j<=n;j++)
        process.stdout.write(j + " ");
        console.log();
    }
    for(i=n-1;i>0;i--){
        for(s=1;s<i;s++)
        process.stdout.write(" ")
        for(j=i;j<=n;j++)
            process.stdout.write(j + " ")
    console.log();
    
    }
}
// revNumTri()

//hollow tri
function hollowTri(){
    n = 5;
    for(i=1;i<=n;i++){
        for(s=i;s<n;s++)
        process.stdout.write(" ")
    for(j=1;j<=n;j++){
        if(j==1 || i==n || j==i)
        process.stdout.write("* ")
        else
        process.stdout.write("  ")
    }
    console.log();
    
    }
}
// hollowTri()

// hollow rev tri
function hollowRevTri(){
    n=5;
    for(i=n;i>0;i--){
        for(s=n;s>i;s--)
        process.stdout.write(" ")
        for(j=1;j<=n;j++){
            if(j==1 || i==n || j==i)
            process.stdout.write("* ")
            else
            process.stdout.write("  ")
        }
    console.log();
    }
}
// hollowRevTri()

//hollow diamond
function hollowDia(){
    n=4;
    for(i=1;i<2*n;i++){
        space = i<=n?n-i:i-n;  // 1 3 2 2| 5 1
        for(s=1;s<=space;s++)
            process.stdout.write(" ")
         col= i<=n?i:2*n-i;  //1 1 | 5 2
        for(j=1;j<=col;j++){
            if(j==1 || j==col)
            process.stdout.write("* ")
            else 
            process.stdout.write("  ")
        }
        console.log();
    }
}
// hollowDia()

//pascal 
function pascal(){
    n=5;
    for(i=1;i<=n;i++){
        for(s=i;s<n;s++)
            process.stdout.write(" ")
        x = 1;
        for(j=1;j<=i;j++){
            process.stdout.write(x + " ")
            x = x*(i-j)/j;
        }
        console.log();
    }
}
// pascal()













