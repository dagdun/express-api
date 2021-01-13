import exampleModel, { ExampleModelIf } from "../../models/example";

export const get = async (req: Express.Request, res: Express.Response) => {
  const doc = await exampleModel.find({}).limit(10);
  res.sendFormat(doc);
};

export const post = async (req: Express.Request, res: Express.Response) => {
  const { name, updateTime, createTime } = req.body;
  const doc: ExampleModelIf = new exampleModel({
    name,
    updateTime,
    createTime,
  });
  const saveDoc = await doc.save();
  if (saveDoc) {
    res.sendFormat(saveDoc.toJSON());
  } else {
    res.sendFormat({}, "save error", 500);
  }
};

export const getId = async (req: Express.Request, res: Express.Response) => {
  const doc = await exampleModel.findOne({ _id: req.params.id });
  if (doc) {
    res.sendFormat(doc.toJSON());
  } else {
    res.sendFormat({}, "doc not found", 404);
  }
};

export const postId = async (req: Express.Request, res: Express.Response) => {
  const { name } = req.body;
  const doc: ExampleModelIf | null = await exampleModel.findOne({ _id: req.params.id });
  if (!doc) {
    return res.sendFormat({}, "doc not found", 404);
  }

  doc.name = name;
  doc.updateTime = +new Date();
  const docResult = await doc.save();
  if (docResult) {
    return res.sendFormat(doc.toJSON());
  } else {
    return res.sendFormat({}, "error update", 500);
  }
};

export const deleteId = async (req: Express.Request, res: Express.Response) => {
  const doc = await exampleModel.remove({ _id: req.params.id });
  if (doc.ok === 1) {
    res.sendFormat({});
  } else {
    res.sendFormat({}, "delete fail", 500);
  }
};
