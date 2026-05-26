import json
import pandas as pd

# JSON 読み込み
with open("flashcards.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# DataFrame 化
df = pd.json_normalize(data)

# Excel 出力
df.to_excel("flashcards.xlsx", index=False)
