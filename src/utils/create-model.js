import ContentRecord from "../components/ContentRecords";

export default (modelId, component) => {
  console.log(ContentRecord({ id: "adad", content: "this is the content" }));
  console.log(typeof ContentRecord);
  return {
    id: modelId,
    content: ContentRecord({ id: "adad", content: "this is the content" }),
  };
};
