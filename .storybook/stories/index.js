import React from "react";
import { storiesOf } from "@storybook/react";
import  Button  from '../../src/components/Button';
import Navigation from "../../src/components/Navigation";
import BarChart from "../../src/components/BarChart";
import Table from "../../src/components/Table";
import Card from "../../src/components/Card";
import Layout from "../../src/components/Layout";

const items = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Settings",
    url: "/"
  },
  {
    name: "About Me",
    url: "/"
  }
];

const data = {
      headers: ["Day", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      values: [
        ["Push Ups", 20, 50, 55, 51, 60, 65, 70, 75, 0, 80],
        ["Design System", 8, 2, 3, 1, 3, 3, 0.5, 0.5, 0],
        [
          "Calorie Deficit",
          `✅`,
          `✅`,
          `🙅‍`,
          `🙅‍`,
          `🙅‍`,
          `🙅‍`,
          `✅`,
          `✅`,
          `🙅‍`
        ],
        [
          "8 Hours Sleep",
          `✅`,
          `✅`,
          `✅`,
          `✅`,
          `✅`,
          `🙅‍`,
          `🙅‍`,
          `✅`,
          `🙅‍`,
          `✅`
        ],
      ]
    }

storiesOf("Layout", module).add("FullScreen", () => (
  <Layout
    navigation
    dark
    items={items}
    url={
      "https://png2.kisspng.com/sh/e0623acdbeeba6cb1d64ec02ae52d306/L0KzQYm3U8A5N5Jvj5H0aYP2gLBuTfF0fKN0htNAdD3rdb30hgQubaZohNttZXHxPcfsgCRwel50jeZucj32gLLqhb1ie6V3h9DqdYSweLbzjfV1NWZmeaJtYki6SYPtUfYxNmg9SaYCMEi8QYa5UMQ6OWQAUag5MUmxgLBu/kisspng-astronaut-helmet-euclidean-vector-outer-space-astronaut-helmet-5aa0db8792f1f0.7814708915204913996019.png"
    }
  />
));

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      hello
    </Button>
  ));


  storiesOf("Navigation", module)
    .add("Light", () => (
      <Navigation
        url={
          "https://png2.kisspng.com/sh/e0623acdbeeba6cb1d64ec02ae52d306/L0KzQYm3U8A5N5Jvj5H0aYP2gLBuTfF0fKN0htNAdD3rdb30hgQubaZohNttZXHxPcfsgCRwel50jeZucj32gLLqhb1ie6V3h9DqdYSweLbzjfV1NWZmeaJtYki6SYPtUfYxNmg9SaYCMEi8QYa5UMQ6OWQAUag5MUmxgLBu/kisspng-astronaut-helmet-euclidean-vector-outer-space-astronaut-helmet-5aa0db8792f1f0.7814708915204913996019.png"
        }
        action
        items={items}
      />
    ))
    .add("Dark", () => (
      <Navigation
        action
        dark
        items={items}
      />
    ));



storiesOf("BarChart", module)
  .add("Light", () => <BarChart action items={items} />)

storiesOf("Table", module).add("Light", () => (
  <Table action data={data} />
));

storiesOf("Card", module).add("Card", () => <Card actions> Stuff inside my Card </Card>);

