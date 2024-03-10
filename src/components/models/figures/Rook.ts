import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../assets/black-rook.png'
import whitelogo from '../../assets/white-rook.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {
        constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.ROOK;
    }
}