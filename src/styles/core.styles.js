export const core = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  questions: {
    flex: '50%',
    height: '100vh',
    textAlign: 'center',
    borderRight: '1px solid #fff',
    '@media (max-width: 768px)': {
      flex: '100%',
      height: 'auto',
    },
  },
  answers: {
    flex: '50%',
    height: '100vh',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      flex: '100%',
      height: 'auto',
    },
  },
  component: {
    marginTop: '50px',
  },
  answerPart: {
    margin: '0 auto',
    marginTop: '70px',
    maxWidth: '80%',
    height: 'auto',
  },
  textBox: {
    height: 'auto',
    width: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(50%)',
    left: 0,
    right: 0,
    margin: '0 0',
  },
  h1: {
    marginTop: '0',
  },
  p: {
    marginBottom: '0',
  },
  a: {
    color: '#09dcdc',
  }
};