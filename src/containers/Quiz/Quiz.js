import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

class Quiz extends Component {
  state = {
    results: {}, // {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [[],[
      {
        question: 'Жанри танцю',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'а) ліричний', id: 1},
          {text: 'б) класичний', id: 2},
          {text: 'в) народно-сценічний', id: 3},
        ]
      },
      {
        question: 'Загальні форми для народних танців',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'а) варіація', id: 1},
          {text: 'б) хоровод', id: 2},
          {text: 'в) вальс', id: 3},
        ]
      },
      {
        question: 'Види хореографічного мистецтва',
        rightAnswerId: 2,
        id: 3,
        answers: [
          {text: 'а) пляска', id: 1},
          {text: 'б) народно-сценічний', id: 2},
          {text: 'в) хоровод', id: 3},
        ]
      },{
        question: 'Частина драматургічної побудови танцю',
        rightAnswerId: 2,
        id: 4,
        answers: [
          {text: 'а) тема', id: 1},
          {text: 'б) надзавдання', id: 2},
          {text: 'в) розвиток дії', id: 3},
        ]
      },{
        question: 'Складова частина ідейно-тематичного аналізу',
        rightAnswerId: 2,
        id: 5,
        answers: [
          {text: 'а) експозиція', id: 1},
          {text: 'б) ідея', id: 2},
          {text: 'в) кульмінація', id: 3},
        ]
      },{
        question: 'Виразні засоби танцю',
        rightAnswerId: 2,
        id: 6,
        answers: [
          {text: 'а) танець за записом', id: 1},
          {text: 'б) композиційний план', id: 2},
          {text: 'в) хореографічний текст', id: 3},
        ]
      },{
        question: 'Хореографічний текст',
        rightAnswerId: 2,
        id: 7,
        answers: [
          {text: 'а) малюнок', id: 1},
          {text: 'б) бігунець', id: 2},
          {text: 'в) мелодія', id: 3},
        ]
      },{
        question: 'Частина композиційного плану',
        rightAnswerId: 2,
        id: 8,
        answers: [
          {text: 'а) розв`язка', id: 1},
          {text: 'б) лібрето', id: 2},
          {text: 'в) розвиток дії', id: 3},
        ]
      },{
        question: 'Види пляски',
        rightAnswerId: 2,
        id: 9,
        answers: [
          {text: 'а) па-де-де', id: 1},
          {text: 'б) масова', id: 2},
          {text: 'в) композиція', id: 3},
        ]
      },{
        question: 'Форма побудови кадрилі',
        rightAnswerId: 2,
        id: 10,
        answers: [
          {text: 'а) квадратна', id: 1},
          {text: 'б) лірична', id: 2},
          {text: 'в) драматична', id: 3},
        ]
      },{
        question: 'Тема танцю',
        rightAnswerId: 2,
        id: 11,
        answers: [
          {text: 'а) те що автор стверджує', id: 1},
          {text: 'б) те про що йде мова', id: 2},
          {text: 'в) авторська позиція', id: 3},
        ]
      },{
        question: 'Видатний педагог в галузі народного танцю',
        rightAnswerId: 2,
        id: 12,
        answers: [
          {text: 'а) Ваганова А.Я.', id: 1},
          {text: 'б) Ткаченко Т.С.', id: 2},
          {text: 'в) Тарасов М. І.', id: 3},
        ]
      },{
        question: 'Нові варіанти хореографічного руху створюються за допомогою',
        rightAnswerId: 2,
        id: 13,
        answers: [
          {text: 'а) малюнку', id: 1},
          {text: 'б) притупу', id: 2},
          {text: 'в) костюму', id: 3},
        ]
      },{
        question: 'Малюнок танцю залежить від',
        rightAnswerId: 2,
        id: 14,
        answers: [
          {text: 'а) костюму', id: 1},
          {text: 'б) задуму', id: 2},
          {text: 'в) настрою', id: 3},
        ]
      },{
        question: 'Запис танцю містить',
        rightAnswerId: 2,
        id: 15,
        answers: [
          {text: 'а) графічний малюнок', id: 1},
          {text: 'б) композиційний план ', id: 2},
          {text: 'в) значення термів', id: 3},
        ]
      }]
    ]
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }else{ if (this.state.answerState[key] === 'error') {
        return
      }}
    }

    const question = this.state.quiz[[this.props.match.params.id]][this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({

        answerState: {[answerId]: 'error'},
        results
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)

    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz[this.props.match.params.id].length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }
componentDidMount(){

  console.log('QuizID:',this.props.match.params.id)
  console.log(this.props.location.state)
}
  render() {
     if(this.props.location.state===undefined){ 
      swal("К сожелению вы не авторезированы ", {
        icon: "warning",
      });
      return(
      <div><NavLink to="/"><h2 className='text-center'>На главную!</h2></NavLink></div>
     )
     }else{
    return (
  
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {
            this.state.isFinished
             ? <FinishedQuiz
                  Name = {this.props.location.state}
                  results={this.state.results}
                  quiz={this.state.quiz[this.props.match.params.id]}
                  onRetry={this.retryHandler}
                />
             : <ActiveQuiz
                answers={this.state.quiz[this.props.match.params.id][this.state.activeQuestion].answers}
                question={this.state.quiz[this.props.match.params.id][this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz[this.props.match.params.id].length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}
}

export default Quiz