interface IProps {
  count: number;
}

const About = ({ count }: IProps) => {
  return <div>싸이프레스 {count}</div>;
};

export default About;
