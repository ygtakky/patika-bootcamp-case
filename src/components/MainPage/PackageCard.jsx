import { Card, Col, Divider, Row, Tag, Typography } from "antd";

const cardStyles = {
  height: "100%",
  width: "100%",
  borderRadius: "0 8px 8px 0",
  backgroundColor: "#F2F2F2",
};

const PackageCard = ({ data }) => {
  return (
    <Row style={{ height: "139px", minWidth: "489px" }}>
      <Col style={{ height: "100%" }}>
        <img
          alt="package"
          src={data.imagePath}
          style={{ height: "100%", borderRadius: "8px 0px 0px 8px" }}
        />
      </Col>
      <Col flex="auto">
        <Card
          title={data.name}
          extra={data.amount + " " + data.currency}
          style={cardStyles}
          headStyle={{ border: "none" }}
          bodyStyle={{
            margin: 0,
            padding: 0,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <Row gutter={14} style={{paddingBottom: 24}}>
            {data.details.map((detail, index) => (
              <Col key={index}>{detail}</Col>
            ))}
          </Row>
          <Divider style={{ margin: "auto", marginBottom: 4}} />
          <Row>
            {data.tags.map((tag, index) => (
              <Col key={index} style={{paddingLeft: 0, paddingRight: 8}}>
                <Tag style={{ margin: 0, borderRadius: 8, backgroundColor: "#C4C4C4"}}>{tag}</Tag>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default PackageCard;
