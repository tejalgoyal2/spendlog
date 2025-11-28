-- Speed up the main dashboard query (Fetching by User + Date sorting)
CREATE INDEX IF NOT EXISTS idx_expenses_user_date ON expenses(user_id, date DESC);

-- Speed up the Needs/Wants chart (Fetching by User + Type)
CREATE INDEX IF NOT EXISTS idx_expenses_user_type ON expenses(user_id, type);
