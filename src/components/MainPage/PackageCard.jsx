import { Card, Col, Divider, Image, Row, Spin, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPackage, removePackage } from "../../redux/packagesSlice";

const cardStyles = {
  height: "100%",
  width: "100%",
  borderRadius: "0 8px 8px 0",
  backgroundColor: "#F2F2F2",
};

const PackageCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.packages.isLoading);

  const handleClick = () => {
    if (!isAdded) {
      dispatch(addPackage(data));
      setIsAdded(true);
    } else {
      dispatch(removePackage(data));
      setIsAdded(false);
    }
  };

  return (
    <Row
      className={isAdded ? "add-border" : "remove-border"}
      style={{
        height: "139px",
        minWidth: "489px",
        cursor: "pointer",
        borderRadius: 8,
      }}
      onClick={handleClick}
    >
      <Col style={{ height: "100%" }}>
        {isLoading ? (
          <Spin />
        ) : (
          <Image
            width="100%"
            height="100%"
            alt="package"
            preview={false}
            src={data.imagePath}
            style={{ borderRadius: "8px 0px 0px 8px" }}
          />
        )}
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
          <Row gutter={14} style={{ paddingBottom: 24 }}>
            {data.details.map((detail, index) => (
              <Col key={index}>&bull; {detail}</Col>
            ))}
          </Row>
          <Divider style={{ margin: "auto", marginBottom: 4 }} />
          <Row>
            {data.tags.map((tag, index) => (
              <Col key={index} style={{ paddingLeft: 0, paddingRight: 8 }}>
                <Tag
                  style={{
                    margin: 0,
                    borderRadius: 8,
                    backgroundColor: "#C4C4C4",
                  }}
                >
                  {tag}
                </Tag>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default PackageCard;
