import { ProjectType } from './project-type';

export class ProjectData{
    public myProjects:ProjectType[] = [
      {
        id: 'crypto_predictor',
        name: 'Ethereum Price Predictor',
        lang: 'Python, tensorflow, numpy, matplotlib',
        shortDescription:'An Ethereum price predictor using a neural network and yahoo finance api data.',
        longDescription: `The Yahoo finance api was used to fetch Ethereum price history, normalized to CAD.
        The data was filtered to only use the close market price for the day. The libraries used include numpy
        matplotlib
        pandas
        pandas_datareader
        sklearn
        virtualenv
        datetime
        tensorflow.
        The data to be fed into a Recurrent Neural Network (RNN) is prepared using numpy to format it into arrays.
        The data used to train (x_train) includes the closing price for the previous 60 days. The correct value 
        that it trains the model against is the 60th day. The complete data set consists of the data from the Jan 1, 2016
        to the present day that the program is run (Jan 3, 2022). The training set is the first 80% of days, while 
        the test set is the latter 20% up to the present day. The RNN uses a LSTM (Long Short Term Memory) data
        input and must be specially formatted into a 3 dimensional data format detailing the number of rows (data set entries), 
        the time step (columns in this case the past 60 days), and the feature, which in this case is 1, since we are
        only using the close market price. The model has 2 LSTM layers and 2 densely connected layers.
        The graph shows the predicted price (yellow) compared to the real price(red). `,
        link: 'https://github.com/lin34/cryptoPredictor',
        picture: '../assets/projects/crypto_predictor.png',
      },
        {
          id: 'pathfindingvisualizer',
          name: 'Path Finding Visualizer',
          lang: 'Python, pygame',
          shortDescription:'A pathfinding visualizer using BFS, DFS and A* algorithms.',
          longDescription: `Visualizer tool built in Python which solves the shortest path between two nodes in a 25x25 maze.`,
          link: 'https://github.com/lin34/PathfindingVisualizer',
          picture: '../assets/projects/PathFindingVisualizer/ex_astar.PNG',
        },
        {
          id: 'bicepcurlcounter',
          name: 'Bicep Curl Counter',
          lang: 'Python, Mediapipe, OpenCV',
          shortDescription:'A handy machine vision workout tool to count your curls.',
          longDescription: `Uses mediapipe's pose detection library to track joints.
          The elbow joint angle is calculated using trigonometry and the relative angle between the left shoulder, left elbow
          and left wrist. From this, the stage of the bicep curl is found. If the angle is greater than 160 degrees,
          it is in the down position, however when it reaches < 30 degrees, it is in the up position.
          When the arm transitions between these two stages, the counter is incremented.`,
          link: 'https://github.com/lin34/BicepCurlCounter',
          picture: '../assets/projects/bicep_curl_counter.PNG',
        },
        {
          id:'compiler',
          name: 'VHDL Compiler',
          lang: 'Java, TDD, ANT test runner',
          shortDescription:'A compiler that parses strings into a subset of VHDL',
          longDescription: `Built this compiler across 8 lab sessions using a TDD approach. Blocks 
          of code were implemented, before being tested to verify that they work. Used VSCode, with 
          Java environment plugins. Overall learned a lot about writing well structured and robust code
          using OOP and unit tests.`,
          link: 'project/noRepository',
          picture: '../assets/projects/compiler/compiler.PNG',
        },
        {
          id: 'wifismartthermostat',
          name: 'Wifi Smart Thermostat',
          lang: 'Python, Flask, REST API, Multi-threading, SolidWorks',
          shortDescription:'This Wifi Smart thermostat allows you to remotely control your HVAC system.',
          longDescription: `Wifi smart thermostat made using Raspberry Pi controlled relays. I configured a basic Flask Restful
                            server to handle http requests. I also made a Flask web app connected that can be accessed through 
                            any device on the same network via the host IP address.`,
          link: 'https://github.com/lin34/wifi_smart_thermostat',
          picture: '../assets/projects/wifi_therm_with_display.jpg',
        },
        {
          id: 'socialmediaapp',
          name: 'Social Media App',
          lang: 'MERNG stack (MongoDB, Express, React.js, Node.js and GraphQL)',
          shortDescription: `This prototype social media app allows users to create an account, login,
                            logout, perform CRUD operations for user posts and show a content feed.
                            Made by following a youtube tutorial video`,
          longDescription: `While logged in, an authentication token is generated so that
                            MongoDB can ensure that only the user has access to unique
                            content. This uses a react based user interface template library
                            called Semantic-UI to render the HTML, using react components. I
                            created this by following alongside a video tutorial. I wanted
                            to learn how the different technologies worked together in hopes
                            to gain an understanding of the broader picture in terms of the
                            front end and back end infrastructure. My goal for the future
                            would be to gain an in depth understanding of each of these
                            technologies, that way I can make my own personal social media
                            application.`,
          link: 'https://github.com/Lin-Michael/Social-Media-App-1',
          picture: '../assets/projects/merng_stack.PNG',
        },
        {
          id: 'pidcontroller',
          name: 'PID Controller',
          lang: 'MatLab, Control Theory',
          shortDescription:
            `Designed an accurate motion controller for a rack and pinion driven cart. 
            Engineered and tuned lead, lag and notch filters with MATLAB Simulink.`,
          longDescription:
          `Designed an accurate motion controller for a rack and pinion driven cart. 
          Engineered and tuned lead, lag and notch filters with MATLAB Simulink.`,
          link: '../assets/projects/MTE360 Project 4_submission.pdf',
          picture: '../assets/projects/mte360_PID.PNG',
        },
        {
          id: 'obstaclecourserobot',
          name: 'Obstacle Course Robot',
          lang: 'C',
          shortDescription:
            'A robot with custom signal processing circuits for encoders and magnetic sensors designed to navigate a track',
          longDescription:
            'A robot with custom signal processing circuits for encoders and magnetic sensors designed to navigate a track',
          link: 'https://devpost.com/software/obstacle-course-robot-zrg1y4',
          picture: '../assets/line_follow.jpg',
        },
      ];
//id should be string, but accept any
      public getProjectFromId(id:any){

          for(let proj of this.myProjects){
              if(proj.id ==id){
                  return proj;
              }
          }
          return null;
      }

}