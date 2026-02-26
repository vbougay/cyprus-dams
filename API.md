# Fragmata API

Public REST API for Cyprus reservoir data. No authentication required.

**Base URL:** `https://fragmata.info/api/v1`

All endpoints support an optional `?dataset=DD-MMM-YYYY` query parameter to select a specific dataset (defaults to the most recent).

---

## Endpoints

### GET /api/v1/summary/

Overview of all reservoirs — total storage, inflow, year-over-year change, and per-region breakdown.

**Response:**
```json
{
  "dataset": "24-FEB-2026",
  "reportDate": "24-FEB-2026",
  "totalCapacity": 290.253,
  "totalStorage": 57.615,
  "totalStoragePercent": 19.8,
  "lastYearStorage": 75.016,
  "lastYearStoragePercent": 25.8,
  "yearOverYearChange": -6.0,
  "inflowLast24h": 3.339,
  "inflowSinceOctober": 36.687,
  "reservoirCount": 18,
  "drainDate": "Not Restricted",
  "forecast": {
    "restrictionDate": "Not Restricted",
    "droughtRestrictionDate": "8/2028",
    "recoveryRestrictionDate": "Not Restricted",
    "restrictionThresholdPct": 7,
    "cyclePhase": "declining",
    "confidence": "high"
  },
  "regions": {
    "Southern Conveyor": { "storagePercent": 16.3, "storageMCM": 31.637 },
    "Paphos": { "storagePercent": 23.2, "storageMCM": 16.667 },
    "Chrysochou": { "storagePercent": 29.4, "storageMCM": 7.681 },
    "Nicosia": { "storagePercent": 46.8, "storageMCM": 1.63 }
  }
}
```

---

### GET /api/v1/reservoirs/

All 21 reservoirs with computed drain dates.

**Query parameters:**
- `region` — filter by region name (e.g., `?region=Paphos`)

**Response:**
```json
{
  "dataset": "24-FEB-2026",
  "reportDate": "24-FEB-2026",
  "count": 21,
  "reservoirs": [
    {
      "name": "Kouris",
      "region": "Southern Conveyor",
      "capacity": 115.0,
      "storageMCM": 20.423,
      "storagePercent": 17.8,
      "lastYearMCM": 24.463,
      "lastYearPercent": 21.3,
      "inflowLast24h": 0.621,
      "inflowSinceOctober": 6.883,
      "maxStorageMCM": 25.538,
      "maxStorageDate": "7/1",
      "drainDate": "Not Restricted",
      "forecast": {
        "restrictionDate": "Not Restricted",
        "droughtRestrictionDate": "3/2029",
        "recoveryRestrictionDate": "Not Restricted",
        "restrictionThresholdPct": 5,
        "cyclePhase": "declining",
        "confidence": "high"
      }
    }
  ]
}
```

**Regions:** Southern Conveyor, Paphos, Chrysochou, Nicosia, Recharge/Other

---

### GET /api/v1/regions/

Aggregated totals for each region plus the grand total.

**Response:**
```json
{
  "dataset": "24-FEB-2026",
  "reportDate": "24-FEB-2026",
  "regions": [
    {
      "region": "Southern Conveyor",
      "capacity": 189.45,
      "storageMCM": 31.637,
      "storagePercent": 16.3,
      "lastYearMCM": 48.315,
      "lastYearPercent": 25.5,
      "inflowLast24h": 1.809,
      "inflowSinceOctober": 17.218,
      "drainDate": "Not Restricted",
      "forecast": {
        "restrictionDate": "Not Restricted",
        "droughtRestrictionDate": "7/2028",
        "recoveryRestrictionDate": "Not Restricted",
        "restrictionThresholdPct": 7,
        "cyclePhase": "declining",
        "confidence": "high"
      }
    }
  ],
  "grandTotal": { ... }
}
```

---

### GET /api/v1/inflow/

Yearly inflow data with year-to-date comparison.

**Response:**
```json
{
  "dataset": "24-FEB-2026",
  "reportDate": "24-FEB-2026",
  "ytd": {
    "currentYear": "25/26",
    "currentYTD": 36.687,
    "lastYear": "24/25",
    "lastYearYTD": 15.507,
    "percentChange": 136.6
  },
  "years": [
    {
      "year": "25/26",
      "total": 36.687,
      "months": { "October": 0.095, "November": 0.2, "December": 1.903, "January": 12.67, "February": 21.819 }
    }
  ]
}
```

---

### GET /api/v1/historical/

Bi-monthly historical storage data (1988–present).

**Query parameters:**
- `from` — start date, YYYY-MM-DD (default: 12 months ago)
- `to` — end date, YYYY-MM-DD (default: today)
- `reservoir` — single reservoir name, e.g., `?reservoir=kouris`

**Response:**
```json
{
  "count": 24,
  "from": "2025-02-01",
  "to": "2026-02-15",
  "entries": [
    {
      "date": "2025-02-01",
      "kouris": 24.5,
      "kalavasos": 5.1,
      "totalAll": 80.2
    }
  ]
}
```

**Reservoir keys:** kouris, kalavasos, lefkara, dipotamos, germasoyeia, arminou, polemidia, asprokremmos, evretou, kannaviou, mavrokolympos, vyzakia, xyliatos, argaka, pomos, kalopanagiotis, agiaMarina, achna, tamassos, klirouMalounta, solea, totalSCP, totalAll

---

### GET /api/v1/datasets/

List all available datasets.

**Response:**
```json
{
  "count": 40,
  "current": "24-FEB-2026",
  "datasets": [
    { "id": "24-FEB-2026", "label": "February 24, 2026" },
    { "id": "20-FEB-2026", "label": "February 20, 2026" }
  ]
}
```

---

## Forecast Fields

The `forecast` object is included in summary, reservoir, and region endpoints. It uses a cycle-aware model based on 38 years of historical storage data.

| Field | Description |
|-------|-------------|
| `restrictionDate` | Expected date when storage drops below the restriction threshold (main forecast) |
| `droughtRestrictionDate` | Worst-case scenario (persistent drought) |
| `recoveryRestrictionDate` | Best-case scenario (wet recovery) |
| `restrictionThresholdPct` | Threshold percentage (5% for individual reservoirs, 7% for regions/grand total) |
| `cyclePhase` | Current position in multi-year cycle: `declining`, `trough`, `recovering`, or `peak` |
| `confidence` | Forecast confidence based on analog year count: `low`, `medium`, or `high` |

The `drainDate` field is populated with the `restrictionDate` value for backward compatibility.

---

## Units

All storage and inflow values are in **MCM** (Million Cubic Meters). Percentages represent storage as a fraction of total capacity.

## Caching

Responses are cached for 1 hour (`Cache-Control: public, s-maxage=3600`). Data is updated approximately weekly when new reports are published.

## CORS

All endpoints return `Access-Control-Allow-Origin: *` — you can call them from any domain.

## Errors

```json
{
  "error": "Invalid dataset ID: '99-XXX-2099'. Use /api/v1/datasets/ to see available datasets.",
  "status": 400
}
```

---

## Home Assistant

Example configuration for a REST sensor:

```yaml
sensor:
  - platform: rest
    name: Cyprus Reservoirs
    resource: https://fragmata.info/api/v1/summary/
    scan_interval: 3600
    value_template: "{{ value_json.totalStoragePercent }}"
    unit_of_measurement: "%"
    json_attributes:
      - totalStorage
      - totalCapacity
      - lastYearStoragePercent
      - yearOverYearChange
      - inflowLast24h
      - inflowSinceOctober
      - drainDate
      - forecast
      - regions
      - reportDate
```

You can then create template sensors for individual regions:

```yaml
template:
  - sensor:
      - name: "Southern Conveyor Storage"
        state: "{{ state_attr('sensor.cyprus_reservoirs', 'regions')['Southern Conveyor']['storagePercent'] }}"
        unit_of_measurement: "%"
      - name: "Cyprus Reservoirs Restriction Date"
        state: "{{ state_attr('sensor.cyprus_reservoirs', 'forecast')['restrictionDate'] }}"
      - name: "Cyprus Reservoirs Cycle Phase"
        state: "{{ state_attr('sensor.cyprus_reservoirs', 'forecast')['cyclePhase'] }}"
```
