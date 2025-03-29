# UptiqAgent - Automated Candlestick Pattern Detection

# Youtube demo link 
https://www.youtube.com/watch?v=fa24yLdfSRE

## Overview
Market prediction through human pattern detection is often imprecise, as many patterns go unnoticed, leading to missed opportunities and potential losses. **UptiqAgent** automates this process by using statistical analysis on candlestick charts across multiple timeframes, generating a confidence score (-1 to 1) that indicates market movement trends.

## Features
- **Automated Pattern Detection**: Identifies 8 different candlestick patterns.
- **Multi-Timeframe Analysis**: Works on 5-minute, 15-minute, and 60-minute timeframes.
- **Confidence Scoring**: Computes a final confidence score using weighted averages.
- **Optimized for Traders**: Useful for intraday traders and algorithmic trading.

## Workflow
1. **Data Input**: The system receives data through the UptiqAgent module.
2. **Timeframe Splitting**: The data is split into three timeframes - 5 min, 15 min, and 60 min.
3. **Pattern Recognition**: Each timeframe runs an 8-pattern resemblance algorithm to generate a score (-1 to 1, bearish to bullish).
4. **Normalization**: Scores are processed using the max-min method to standardize values.
5. **Final Confidence Score**: All three scores are combined with weighted averaging to produce a final prediction score for each timestamp.

## Target Audience
- **Day Traders & Scalpers**: Helps make quick and informed trading decisions.
- **Algorithmic Traders**: Can integrate scores into automated trading systems.
- **Retail Investors**: Provides insights to enhance trading strategies.
