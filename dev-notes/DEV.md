# Dev Notes

## Directory structure

1. root directory 는 /src
2. 전체 page template 는 /page 에 위치함
3. page 의 구성 component 는 /components 에 위치함
4. type, db schema, firebase setting, dummy data, global function 등은 /utils 에 위치함
5. global fetch api 는 (존재한다면) /apis 에 위치함
6. 폰트는 /assets/fonts 에 위치함
7. 이미지는 /assets/images 에 위치함

## Temporary Notes

- pages/Home.tsx 에 fetch sample 올려놓음 [fetch sample](https://github.com/busankimchi/CS374-design-project/blob/a42816de47d400ac0383a080e71c16220538dc2d/src/pages/Home.tsx#L23-L38)

- 폰트나 색 설정은 이거 처럼 하면 됨 [font/theme-sample](https://github.com/busankimchi/CS374-design-project/blob/cd44f85e12c94992c81993ab9623a5902a921279/src/components/BaseView/MainDrawer.tsx#L47-L50), [font/theme-sample-2](https://github.com/busankimchi/CS374-design-project/blob/cd44f85e12c94992c81993ab9623a5902a921279/src/components/General/TopAppBar.tsx#L26-L58)
