# Reactjs used Material UI 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
***
## Available Scripts

In the project directory, you can run:

#### `npm start`

#### `npm run build`

Material UI를 이용한 반응형 개발.
***
###AddPost.js

Post 작성을 위한 버튼 위치를 고정하려고 아래처럼 사용했으나 동작하지 않음.<br/>

```javascript
const useStyles = makeStyles((theme) => ({
    fab:{
        position:"fixed",
        bottom:20,
        right:20
    }
}));
```
important를 추가하면 작동함.
```javascript
const useStyles = makeStyles((theme) => ({
    fab:{
        position:"fixed !important",
        bottom:20,
        right:20
    }
}));
```
공식 문서에는 아래처럼 나와있으나 작동하지 않음.
```javascript
const useStyles = makeStyles((theme) => ({
    fab:{
        '& .MuiButtonBase-root-MuiFab-root':{
            position:"fixed !important"
        },
        bottom:20,
        right:20
    }
}));
```
아니면 아래 처럼 해도 작동
```javascript
<Fab color="primary" className={classes.fab} style={{position:"fixed"}}>
    <AddIcon/>
</Fab>
```