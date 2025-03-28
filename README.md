# Automated Trading System

## Overview
The **Virtual Environment Candlestick Analysis** project simulates a real-time data feed and computes confidence scores for **NIFTY_50** candlestick patterns. This system was developed as an alternative to the **UPITQ agent API**, which was inaccessible via the console. It provides a structured approach to evaluating market trends by analyzing candlestick formations and generating confidence scores.

---

## Key Features

### 1. **Modular Sub-Agent Design**
- **Eight Sub-Agents:** Each sub-agent specializes in detecting a specific candlestick pattern (e.g., Bullish Engulfing, Bearish Engulfing, Morning Star, etc.).
- **Task Distribution:** The workload is divided among multiple agents, reducing system complexity and improving maintainability.
- **Confidence Scores:** Each pattern-specific sub-agent calculates an individual confidence score, contributing to an overall **market sentiment indicator**.

### 2. **Real-Time Data Simulation**
- The script `real_time_feed.py` **simulates live market data flow** by appending new records from `dataset.csv` to `NIFTY_50_minute_data.csv` every second.
- The system automatically triggers `pattern_detection.py` at scheduled intervals to analyze the updated data and compute confidence scores.

### 3. **Candlestick Pattern Analysis**
- Individual scripts (e.g., `hammer.py`, `shooting_star.py`) implement mathematical techniques to detect specific candlestick formations.
- Scores are **normalized** within a range of `[-1, 1]` to represent bullish or bearish strength effectively.

---

## System Workflow

### **1. Data Streaming**
- `real_time_feed.py` reads records from `dataset.csv` **one at a time**.
- Every second, a new row is added to `NIFTY_50_minute_data.csv`.

### **2. Pattern Detection**
- After a predefined interval (e.g., every 10 seconds), `pattern_detection.py` is triggered.
- The script **analyzes the latest data**, applies pattern recognition logic, and updates the confidence scores.

### **3. Confidence Score Calculation**
- Each sub-agent assigns a **partial score**:
  - `0 to 1` for **bullish** patterns.
  - `-1 to 0` for **bearish** patterns.
- Scores are aggregated over different timeframes (e.g., `5, 15, 60 minutes`) using a **weighted average**.
- The final confidence score indicates **market sentiment**:
  - `-1` = Strongly Bearish
  - `+1` = Strongly Bullish

---

## Steps to Run the Project

### **1. Install Dependencies**
Ensure you have Python `3.7+` and install the required dependencies:
```sh
pip install pandas numpy
```

### **2. Navigate to the Project Directory**
```sh
cd /path/to/project
```

### **3. Start the Real-Time Feed**
Run the following command:
```sh
python real_time_feed.py
```
- This script **appends new market data** to `NIFTY_50_minute_data.csv` every second.
- It automatically triggers **pattern detection** at regular intervals.

### **4. Monitor the Output**
- Observe the **appended records** in the console.
- Look for **messages** indicating updated confidence scores.
- The final aggregated confidence scores are saved in `final_scores.csv`.

---

## Mentoring Insights and Improvements

### **Initial Approach**
- A **single sub-agent** managed all pattern detections, which led to **increased complexity** and system bottlenecks.

### **Mentor Feedback**
- Suggested splitting pattern detection into **eight specialized sub-agents**.

### **Outcome**
- **Reduced system complexity**
- **Improved scalability and efficiency**
- **Streamlined workflow for better pattern recognition**

---

## Conclusion
This project provides a **structured and efficient** way to simulate real-time market data and analyze candlestick patterns. By leveraging a modular approach with dedicated sub-agents, it enhances maintainability and accuracy in predicting market sentiment.

For any queries or contributions, feel free to explore the repository and suggest improvements!

---

