
function make()
{
let size;
// size = document.getElementById("size").value;//size of the main matrix
const m = new Array(size);//the main matrix
let pile = new Array()
let pile2 = new Array()
    size = document.getElementById("size").value;
for (let i = 0; i < size; i++) {
  m[i] = new Array(size);
}
for(let i=0;i<size;i++)
{
    for(let j=0;j<size;j++)
    {
        m[i][j]={
            done:false,
            up:false,
            right:false,
            left:false,
            down:false
        }; 
    }
}
let cont=1;
let i=0,j=0;
let val;
let x;
while(cont<(size*size))
{
    console.log(i,j)
    console.log(pile)
    while(m[i][j].done||((i==0||m[i-1][j].done==true)&&(i==size-1||m[i+1][j].done==true)&&(j==0||m[i][j-1].done==true)&&(j==size-1||m[i][j+1].done==true)))
    {
        console.log(i,j,'inside')
        if(!m[i][j].done)
        {
            m[i][j].done=true;
            cont++;
            if(cont>(size*size)){break;}
            x=pile2.pop();
            j=pile.pop();
            i=pile.pop();
            if(!m[i][j].done)
            {
                if(x==0){m[i][j].down=true;m[i+1][j].up=true}
                if(x==1){m[i][j].left=true;m[i][j-1].right=true}
                if(x==2){m[i][j].right=true;m[i][j+1].left=true}
                if(x==3){m[i][j].up=true;m[i-1][j].down=true}
            }
            console.log(i,j,'after pop')
            if(cont>(size*size)){break;}
        }
        else
        {
            console.log(i,j,'in else')
            x=pile2.pop();
            j=pile.pop();
            i=pile.pop();
            if(!(m[i][j].done||((i==0||m[i-1][j].done==true)&&(i==size-1||m[i+1][j].done==true)&&(j==0||m[i][j-1].done==true)&&(j==size-1||m[i][j+1].done==true))))
            {
                if(x==0){m[i][j].down=true;m[i+1][j].up=true}
                if(x==1){m[i][j].left=true;m[i][j-1].right=true}
                if(x==2){m[i][j].right=true;m[i][j+1].left=true}
                if(x==3){m[i][j].up=true;m[i-1][j].down=true}
                console.log("x=",x)
            }
        }
    }
    if(cont>(size*size)){break;}
    do 
    {
        val= Math.floor(Math.random() * 4);
    } while ((i === 0 && val === 0) ||
    (i === size - 1 && val === 3) ||
    (j === 0 && val === 2) ||
    (j === size - 1 && val === 1) ||
    ((i > 0 && m[i - 1] && m[i - 1][j] && m[i - 1][j].done === true && val === 0)) ||
    ((j < size - 1 && m[i][j + 1] && m[i][j + 1].done === true && val === 1)) ||
    ((j > 0 && m[i][j - 1] && m[i][j - 1].done === true && val === 2)) ||
    ((i < size - 1 && m[i + 1] && m[i + 1][j] && m[i + 1][j].done === true && val === 3)));
    if(val==0)
    {
        m[i][j].up=true;
        m[i][j].done=true;
        // #############################################
        if(!(i==size-1||m[i+1][j].done==true))
        {
            if(!checkPile(i+1,j))
            {
                pile.push(i+1);
                pile.push(j);
                pile2.push(3);
                
            }
        }
        if(!(j==0||m[i][j-1].done==true))
        {
            if(!checkPile(i,j-1))
            {
                pile.push(i);
                pile.push(j-1);
                pile2.push(2);
                
            }
        }
        if(!(j==size-1||m[i][j+1].done==true))
        {
            if(!checkPile(i,j+1))
            {
                pile.push(i);
                pile.push(j+1);
                pile2.push(1);
                
            }
        }
        // #############################################
        i--;
        m[i][j].down=true;
        cont++;
    }
    if(val==1)
    {
        m[i][j].right=true;
        m[i][j].done=true;
        // #############################################
        if(!(i==size-1||m[i+1][j].done==true))
        {
            if(!checkPile(i+1,j))
            {
                pile.push(i+1);
                pile.push(j);
                pile2.push(3);
                
            }
        }
        if(!(j==0||m[i][j-1].done==true))
        {
            if(!checkPile(i,j-1))
            {
                pile.push(i);
                pile.push(j-1);
                pile2.push(2);
                
            }
        }
        if(!(i==0||m[i-1][j].done==true))
        {
            if(!checkPile(i-1,j))
            {
                pile.push(i-1);
                pile.push(j);
                pile2.push(0);
                
            }
        }
        // #############################################
        j++;
        m[i][j].left=true;
        cont++;
    }
    if(val==2)
    {
        m[i][j].left=true;
        m[i][j].done=true;
        // #############################################
        if(!(i==size-1||m[i+1][j].done==true))
        {
            if(!checkPile(i+1,j))
            {
                pile.push(i+1);
                pile.push(j);
                pile2.push(3);
                
            }
        }
        if(!(j==size-1||m[i][j+1].done==true))
        {
            if(!checkPile(i,j+1))
            {
                pile.push(i);
                pile.push(j+1);
                pile2.push(1);
                
            }
        }
        if(!(i==0||m[i-1][j].done==true))
        {
            if(!checkPile(i-1,j))
            {
                pile.push(i-1);
                pile.push(j);
                pile2.push(0);
                
            }
        }
        // #############################################
        j--;
        m[i][j].right=true;
        cont++;  
    }
    if(val==3)
    {
        m[i][j].down=true;
        m[i][j].done=true;
        // #############################################
        if(!(j==0||m[i][j-1].done==true))
        {
            if(!checkPile(i,j-1))
            {
                pile.push(i);
                pile.push(j-1);
                pile2.push(2);
                
            }
        }
        if(!(j==size-1||m[i][j+1].done==true))
        {
            if(!checkPile(i,j+1))
            {
                pile.push(i);
                pile.push(j+1);
                pile2.push(1);
                
            }
        }
        if(!(i==0||m[i-1][j].done==true))
        {
            if(!checkPile(i-1,j))
            {
                pile.push(i-1);
                pile.push(j);
                pile2.push(0);
        
            }
        }
        // #############################################
        i++;
        m[i][j].up=true;
        cont++;
    }
}
// document.addEventListener('DOMContentLoaded', function () {
    let main = document.getElementById('main');
    main.innerHTML=' '
    for(let i=0;i<size;i++)
    {
        let tr=document.createElement('tr');
        for(let j=0;j<size;j++)
        {
            let td=document.createElement('td');
            if(!m[i][j].right){td.style.borderRight='solid 1px #000'}
            if(!m[i][j].left){td.style.borderLeft='solid 1px #000'}
            if(!m[i][j].up){td.style.borderTop='solid 1px #000'}
            if(!m[i][j].down){td.style.borderBottom='solid 1px #000'}
            td.style.height=(1/size)*100+"%"
            tr.appendChild(td);
        }
        main.appendChild(tr);
    }
// });
function checkPile(i,j)
{
    for(let k=0;k<pile.length;k+=2)
    {
        if(pile[k]==i&&pile[k+1]==j)
        {
            return true;
        }
    }
    return false;
}
}