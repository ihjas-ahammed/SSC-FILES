"""Project shim; shared formatting utility runs against this project directory."""
from pathlib import Path
import runpy
runpy.run_path(str(Path(__file__).resolve().parents[3] / "flow-library/study-map/scripts/display-columns.py"), run_name="__main__")
