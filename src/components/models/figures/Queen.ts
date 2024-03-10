import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../../assets/black-queen.png'
import whitelogo from '../../../assets/white-queen.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Queen extends Figure {
        constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.QUEEN;
    }
}