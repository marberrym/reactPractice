
let h = React.createElement
let d = ReactDOM.render

const titles = ['Samarai Champloo',
              'Cowboy Bebop',
              'Mmmm Faye Valentine',
              'React FTW']

let User = () => {
  return h('div', {className: 'iconBox'}, [
    h('img', {className: 'icon', src: 'rick.png'}),
    h('span', {className: 'newPost'}, 'Rick Sanchez Posted:'),
  ])
}

let DeleteButton = (props) => {
  return h('div', {className: 'flex'}, [
    h('button', {className: 'btn', onClick: () => {
      posts = posts.filter(post => post.title !== props.postTitle);
      rerender();
    }}, 'Delete this post!'),
  ])
}

let ChangeBlogName = (props) => {
  console.log(props);
  return h('div', {className: 'flex'}, [
    h('button', {className: 'btn', onClick: () => {
      console.log(titles.length);
      let newState = (props.titleIndex + 1) % titles.length;
      console.log(newState);
      this.setState({titleIndex: newState});
      console.log(props);
    }}, 'Change ze blog!')
  ])
}



let SnakifyButton = (props) => {
  return h('div', {className: 'flex'}, [
    h('button', {className: 'btn', onClick: () => {
      let newPosts = posts.map(post => {
        if (post.title === props.postTitle) {
          return Object.assign({}, props, {title: post.title + '🐍'})
        } else {
          return post
        }     
      });
      posts = newPosts;
      rerender();
    }}, 'SNAKIFY...sss.'),
  ])
}

let PostContent = (props) => {
  return h('div', {}, [
      h('img', {src: "samcham.gif", className: 'samcham'}),
      h('h2', {}, props.title),
      h('h4', {}, 'Built with React, easy peasy.'),
      h('p', {}, props.body),
      h('div', {}, 'Oh, you fancy huh?  Nails done, hair done, erryting BIG.'),
      h(DeleteButton, {postTitle: props.title}),
      h(SnakifyButton, {postTitle: props.title}),
  ])
}

let Blog = (props) => {
  return h('div', {className: 'post'}, [ 
      h(User, {}),
      h(PostContent, {title: props.thispost.title, body: props.thispost.body})
    ]) 
  ;
}

let BlogList = (props) => {
  return h('div', {}, 
    props.postlist.map(post => {
      return h(Blog, {thispost: post})
    })
  )
}


let Title = (props) => {
  return h('h1', {className: 'mainHead'}, titles[props.titleIndex])

}
let BuildBlog = (props) => {
  return h('div', {className: 'flexColumn'}, h(BlogList, {postlist: props.postlist}))
}

let SideBar = () => {
  return h('div', {className: 'sideBar'}, [
    h('div', {className: 'link'}, h('span', {className: 'word'}, 'About')),
    h('div', {className: 'link'}, h('span', {className: 'word'}, 'Sign Up')),
    h('div', {className: 'link'}, h('span', {className: 'word'}, 'Register'))
  ])
}



class BlogHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postlist: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        }
      ],
      titleIndex: 0,
    }
  }
  render() {
    return h('div', {}, [
      h(Title, {titleIndex: this.state.titleIndex}),
      h(ChangeBlogName, {titleIndex: this.state.titleIndex}),
      h(BuildBlog, {postlist: this.state.postlist}),
      h(SideBar, {})
    ])
  }
}


let rerender = () => d(h(BlogHomePage, {}), document.getElementById('postArea'));
rerender();




