
import "./Chess.css";

const Box = () => {
  return <div className="box"></div>;
};

const Row = () => {
  return (
    <div className="row">
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
};

const chess = () => {
  return (
    <div>
      <div className="board">
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </div>
    </div>
  );
};

export default chess;