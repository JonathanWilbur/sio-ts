/* eslint-disable */
import { id_at_clearance } from "x500-ts/dist/node/modules/EnhancedSecurity/id-at-clearance.va";
import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import {
    Clearance,
    _decode_Clearance,
    _encode_Clearance,
} from "../SIOsAccessControl-MODULE/Clearance.ta";
export { id_at_clearance } from "x500-ts/dist/node/modules/EnhancedSecurity/id-at-clearance.va";
export { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "x500-ts/dist/node/modules/InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "x500-ts/dist/node/modules/InformationFramework/SYNTAX-NAME.oca";
export {
    Clearance,
    _decode_Clearance,
    _encode_Clearance,
} from "../SIOsAccessControl-MODULE/Clearance.ta";

/* START_OF_SYMBOL_DEFINITION clearance */
/**
 * @summary clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clearance ATTRIBUTE ::= {WITH SYNTAX  Clearance
 *                          ID           id-at-clearance
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Clearance>}
 * @implements {ATTRIBUTE<Clearance>}
 */
export const clearance: ATTRIBUTE<Clearance> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Clearance,
    },
    encoderFor: {
        "&Type": _encode_Clearance,
    },
    "&id": id_at_clearance /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION clearance */

/* eslint-enable */
