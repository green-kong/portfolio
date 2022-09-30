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
  titleURL: '이력서 보기',
  urlCV: './assets/RESUME.PDF',
};

//=========================================
//                 SKILLS
//=========================================
export const skillsData = [
  {
    img: './assets/js.svg',
    nameSkill: 'Javascript',
  },
  {
    img: './assets/typescript.svg',
    nameSkill: 'Typescript',
  },
  {
    img: './assets/node.js.svg',
    nameSkill: 'Node.js',
  },
  {
    img: './assets/nestjs-icon.svg',
    nameSkill: 'Nest.js',
  },
  {
    img: './assets/expressjs.svg',
    nameSkill: 'Express',
  },
  {
    img: './assets/mysql.svg',
    nameSkill: 'mySql',
  },
  {
    img: './assets/redis.svg',
    nameSkill: 'Redis',
  },
  {
    img: './assets/mongodb.svg',
    nameSkill: 'MongoDB',
  },
  {
    img: './assets/sequelize.svg',
    nameSkill: 'Sequelize',
  },
];
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
  {
    title: 'Helpless-DID',
    describe: `[2022.08.08 ~ 2022.09.27]</br>
    </br>
    회원가입된 사용자의 정보를</br>
    탈중앙화된 Contract에 저장하는 DID 서비스를 구현하였고,</br>
    해당 사이트의 계정으로 다른 사이트를 이용할 수 있도록</br>
    SSO 서비스를 개발했습니다.</br>
    뿐만 아니라, DID 계정을 이용해 로그인 한 사용자는 </br>
    각각의 사이트의 포인트를 공유할 수 있도록 하였습니다.</br>
    서버의 성능 효율성을 생각하여,</br>
    서버로부터 SSO 서비스를 이용할 수 있는 </br>
    Login Server를 분리하여 개발했습니다.</br>
    </br>
    [Challenge]</br>
    </br>
    Login Server의 개발을 혼자서 진행하였는데,
    수료한 과정에서는 express만 다루었지만,</br>
    유지보수성이 뛰어난 애플리케이션을 만들기 위해</br>
    아키텍쳐를 제공해주는 nest를 사용했습니다.</br>
    nest를 이용하면서 MVC 패턴과 DTO등 개념적으로만 알고있던 부분을</br>
    직접 구현하고 사용할 수 있어서 즐거웠습니다.</br>
    또한 Refresh Token을 처음으로 사용해 보았는데,</br>
    Refresh Token의 로직도 재밌었지만,</br>
    사용자 편의성과 보안성을 놓고 고민하는 과정을 통해</br>
    서비스에 대해 깊게 고민해볼 수 있는 시간을 가질 수 있었습니다.</br>
    `,
    url: 'https://github.com/green-kong/DID',
    img: './assets/did.gif',
  },
  {
    title: 'Dodol',
    describe: `[2022.05.16 ~ 2022.06.03]</br>
    </br>
    어린 시절 땅을 파서 묻었던 타임캡슐을</br>
    모바일 애플리케이션으로 만들어보았습니다.</br>
    위치기반 서비스를 이용하여,</br>
    캡슐을 묻은 위치로부터 반경 100m 안에서만</br>
    캡슐을 열어 볼 수 있습니다.</br>
    캡슐에는 텍스트와 이미지뿐만 아니라</br>
    YouTube Data API를 이용한 음악검색 기능을 이용하여</br>
    음악 또한 저장할 수 있습니다.</br>
    </br>
    혼자서 백엔드의 처음부터 끝까지 작업하면서</br>
    백엔드의 매력에 더욱 빠져들 수 있었고,</br>
    개발자로의 정체성을 잡아준 프로젝트였습니다.</br>
    </br>
    [Challenge]</br>
    </br>
    웹보다 모바일 앱에서 더욱더 정확한</br>
    위치기반 서비스를 시용할 수 있기에,</br>
    수업 때는 전혀 다루지 않았던,</br>
    expo와 React-Native를 이용하여 프로젝트를 진행하였습니다.</br>
    </br>
    또한 코드의 가독성과, 프로젝트 전체 완성도를 위해</br>
    기존에 사용하던 javascript가 아닌,
    typescript를 사용했습니다.
    </br> 
    `,
    url: 'https://github.com/hb707/Dodol-app',
    img: './assets/dodol.gif',
  },
  {
    title: 'Carrot World',
    describe: `[2022.03.21 ~ 2022.04.08]</br>
    </br>
    3주간 진행한 프로젝트였습니다.</br>
    평소 관심 있던 중고거래 플랫폼을 구현해 보았습니다.</br>
    기존의 중고거래 플랫폼들을 이용할 때,</br>
    경매 기능이 있었으면 좋겠다는 생각을 항상 가지고 있었기에,</br>
    socket.io를 이용해 경매 기능을 구현해 봤습니다.</br>
    </br> 
    [Challenge]</br> 
    </br>
    axios와 template을 이용하여 SPA를 구현하기는 하였으나,</br>
    주소창의 주소가 변경되지 않아 뒤로 가기를 누르면</br>
    페이지가 나가지는 이슈가 있었습니다.</br>
    구글링을 통해 hash(#)를 이용하여 </br>
    react의 router 기능을 비슷하게 구현하는 방법을 공부하고</br>
    적용해 보았습니다.</br>
    </br>
    관리자 페이지의 통계 페이지에서</br>
    chart.js를 이용해서 카테고리 활성도를</br> 
    막대그래프로 나타내 보았습니다.</br>
    `,
    url: 'https://github.com/green-kong/carrot_world',
    img: './assets/carrotWorld.png',
  },
  {
    title: 'Team6 Project', // card image  > insert the svg image in the assets folder
    describe: `[2022.02.21 ~ 2022.02.27]</br>
    </br>
    일주일 동안 진행한 프로젝트입니다.</br>
    회원가입, 로그인, 회원정보 수정, 회원 탈퇴,</br>
    게시글 & 댓글의 작성과 수정, 삭제, 관리자 페이지 등</br>
    기본적인 CRUD를 연습하기 위한 프로젝트였습니다.</br>
    첫 협업이었는데 코로나 때문에 비대면으로 진행되어 걱정이 많았지만,</br>
    팀원들이 모두 잘 따라주어, 기대 이상의 결과를 낼 수 있었습니다.</br>
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
    img: './assets/team6project.png', //image Project
  },
];
