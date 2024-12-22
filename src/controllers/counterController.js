import Counter from "../models/counterModel.js";

export const getCounterData = async (req, res) => {
  try {
    const counter = await Counter.findOne();
    if (!counter) {
      return res.status(404).json({ message: "Counter is not found" });
    }

    const now = new Date();
    const startDate = counter.startDate;
    const targetDate = new Date(startDate);
    targetDate.setFullYear(targetDate.getFullYear() + 1);

    const timeRemaining = targetDate - now;
    const timePassed = now - startDate;

    res.status(200).json({
      message: "Counter data",
      startDate,
      targetDate,
      timeRemaining,
      timePassed,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed recieve the data" });
  }
};

export const startCounter = async (req, res) => {
  try {
    const counter = new Counter({ startDate: new Date() });
    await counter.save();
    res.status(201).json({ message: "Counter started", data: counter });
  } catch (error) {
    res.status(500).json({ message: "Error. something went wrong", error });
  }
};

export const resetCounter = async (req, res) => {
  try {
    const result = await Counter.deleteMany();
    res.status(200).json({ message: 'Counter reset', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ message: 'Failed to reset counter', error });
  }
}
