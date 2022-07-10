// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
  // Hi, my name is....
  yourName: '이동훈', // Insert your name
  socialNetwork: [
    {
      icon: 'fa fa-rss', // find other icon in https://fontawesome.com/v4.7/icons/
      nameSocialNetwork: 'Blog',
      url: 'https://kong-dev.tistory.com/',
    },
    {
      icon: 'fa fa-github-alt', // find other icon in https://fontawesome.com/v4.7/icons/
      nameSocialNetwork: 'Github',
      url: 'https://github.com/green-kong',
    },
  ],

  // Page session direction
  nav: [
    {
      optionNav: 'About me',
      idSection: 'about', // If it changes, check the session id in <index.html> ;
    },
    {
      optionNav: 'Skills',
      idSection: 'skills', // If it changes, check the session id in <index.html> ;
    },
    {
      optionNav: 'Projects',
      idSection: 'projects', // If it changes, check the session id in <index.html> ;
    },
  ],
};

//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
  title: '',
  description: `안녕하세요.</br>
    기억보다 기록을 믿고,</br>
    새로운 것에 도전함에 있어 두려움보다</br> 
    흥미로움을 느끼는 개발자</br>
    이동훈 입니다.`,
  titleURL: 'View CV',
  urlCV: '/RESUME.PDF',
};

//=========================================
//                 SKILLS
//=========================================
export const skillsData = [
  {
    img: '/js.svg',
    nameSkill: 'JavaScript',
  },
  {
    img: '/typescript.svg', // card image  > insert the svg image in the assets folder
    nameSkill: 'Typescript', //  card name
  },
  {
    img: '/node.js.svg',
    nameSkill: 'Node.js',
  },
  {
    img: '/expressjs.svg',
    nameSkill: 'Express',
  },
  {
    img: '/mysql.svg',
    nameSkill: 'mySql',
  },
  {
    img: '/sequelize.svg',
    nameSkill: 'Sequelize',
  },
  {
    img: '/react.svg',
    nameSkill: 'React',
  },
  {
    img: '/redux.svg',
    nameSkill: 'Redux',
  },
];
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
  {
    title: 'Team6 Project', // card image  > insert the svg image in the assets folder
    describe: `[2022.02.21 ~ 2022.02.27]</br>
    </br>
    일주일 동안 진행된 프로젝트입니다.</br>
    회원가입, 로그인, 회원정보 수정, 회원탈퇴,</br>
    게시글 & 댓글의 작성과 수정, 삭제, 관리자 페이지 등</br>
    기본적인 CRUD를 연습하기 위한 프로젝트 였습니다.</br>
    첫 협업이었는데 코로나 때문에 비대면으로 진행되어 걱정이 많았지만,</br>
    팀원들이 모두 잘 따라주어, 기대이상의 결과를 낼 수 있었습니다.</br>
    </br>
    [Challenge]</br>
    </br>
    아직 수업에서 다루지 않았던 비동기통신을</br>
    XMLHttpRequest와 fetch를 이용해서 구현했습니다.</br>
    배우지 않은 부분을 활용해서 기능을 구현한다는 것이 걱정스럽긴 했지만</br>
    좋은 결과를 도출 해낼 수 있었고,</br>
    이후에 진행된 프로젝트에서도 챌린징한 시도를 하게 된</br>
    밑거름이 되었습니다.</br>
     `,
    url: 'https://github.com/green-kong/team6_login_board', // url of the Github repository
    img: '/team6project.png', //image Project
  },
  {
    title: 'Carrot World',
    describe: `[2022.03.21 ~ 2022.04.08]</br>
    </br>
    3주간 진행한 프로젝트 였습니다.</br>
    평소 관심있던 중고거래 플랫폼을 구현해 보았습니다.</br>
    기존의 중고거래 플랫폼들을 이용할때,</br>
    경매기능이 있었으면 좋겠다는 생각을 항상 가지고 있었기에,</br>
    socket.io를 이용해 경매 기능을 구현해 봤습니다.</br>
    </br> 
    [Challenge]</br> 
    </br>
    axios와 template을 이용하여 SPA를 구현하가는 하였으나,</br>
    주소창의 주소가 변경되지 않아 뒤로가기를 누르면</br>
    페이지가 나가지는 이슈가 있었습니다.</br>
    구글링을 통해 hash(#)를 이용하여 </br>
    react의 router 기능을 비슷하게 구현하는 방법을 공부하고</br>
    적용해 보았습니다.</br>
    </br>
    관리자 페이지의 통계 페이지에서</br>
    chart.js를 이용해서 카테고리 활성도를</br> 
    막대 그래프로 나타내 보았습니다.</br>
    `,
    url: 'https://github.com/green-kong/carrot_world',
    img: '/carrotWorld.png',
  },
  {
    title: 'Dodol',
    describe: `[2022.05.16 ~ 2022.06.03]</br>
    </br>
    어린시절 땅을 파서 묻었던 타임캡슐을</br>
    모바일 어플리캐이션으로 만들어보았습니다.</br>
    위치기반 서비스를 이용하여,</br>
    캡슐을 묻은 위치로 부터 반경 100m안에서만</br>
    캡슐을 열어 볼 수 있습니다.</br>
    캡슐에 담아둘 메모리에는 텍스트와 이미지 뿐만 아니라</br>
    YouTube Data API를 이용한 음악검색 기능을 이용하여</br>
    음악 또한 저장 할 수 있습니다.</br>
    혼자서 백엔드의 처음부터 끝까지 작업하면서</br>
    백엔드의 매력에 더욱 빠져 들 수 있었고,</br>
    개발자로의 정체성을 잡아준 프로젝트 였습니다.</br>
    </br>
    [Challenge]</br>
    </br>
    아이템이 정해진 이후, 웹보다 모바일 앱에서 더욱 더 정확한</br>
    위치기반 서비스를 시용할 수 있기에,</br>
    수업때는 전혀 다루지 않았던,</br>
    expo와 React-Native를 이용하여 프로젝트를 진행하였습니다.</br>
    </br>
    또한 코드의 가독성과, 프로젝트 전체 완성도를 위해</br>
    기존에 사용하던 javascript가 아닌,
    typescript를 사용했습니다.
    </br> 
    `,
    url: '/https://github.com/hb707/Dodol-app',
    img: '/dodol.gif',
  },
];
