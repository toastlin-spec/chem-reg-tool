/* 化學品法規速查表：法規清單資料
 * PEL：勞工作業場所容許暴露標準 附表一（114.04.11 修正，116.01.01 施行版本）
 *   欄位：編號|中文名稱|英文名稱|CAS|符號|ppm|mg/m3|備註（O1~O3=第一~三種有機溶劑；S甲/S乙/S丙1/S丙2/S丙3/S丁=特定化學物質；其餘為原備註文字，以;分隔）
 * TOX：列管毒性化學物質及其運作管理事項 附表一（115.04.27 修正）
 *   欄位：列管編號|序號|中文名稱|英文名稱|CAS|管制濃度%|分級運作量kg（-為無）|毒性分類
 * CC：列管關注化學物質及其運作管理事項 附表一~三
 *   欄位：列管編號|序號|中文名稱|英文名稱|CAS|管制濃度%|具危害性(Y/N)|運送分級運作量kg|運作分級運作量kg|類別
 * MON_SC：勞工作業環境監測實施辦法 附表二（特定化學物質）對應之容許暴露標準編號
 */
window.CHEM_DATA = {
PEL: `1|乙醛|Acetaldehyde|75-07-0||100|180|
2|醋酸|Acetic acid|64-19-7||10|25|
3|乙酸酐|Acetic anhydride|108-24-7||5|21|
4|丙酮|Acetone|67-64-1||200|475|O2
5|乙腈|Acetonitrile|75-05-8||40|67|
6|四溴化乙炔（1,1,2,2-四溴乙烷）|Acetylene tetrabromide|79-27-6||1|14|
7|丙烯醛|Acrolein|107-02-8|皮|0.1|0.23|
8|丙烯醯胺|Acrylamide|79-06-1|皮||0.03|S丙1
9|丙烯酸|Acrylic acid|79-10-7|皮|10|30|
10|丙烯腈|Acrylonitrile|107-13-1|皮|2|4.3|S丙1
11|阿特靈|Aldrin|309-00-2|皮|||禁止製造、輸入、販賣及使用之毒性化學物質
12|2-丙烯-1-醇|Allyl alcohol|107-18-6|皮|2|4.8|
13|3-氯丙烯|Allyl chloride|107-05-1||1|3|
14|丙烯基縮水甘油醚|Allyl glycidyl ether (AGE)|106-92-3|高|5|23|
15|鋁及其不溶性化合物（以鋁計）|Aluminum and its insoluble compounds (as Al)|7429-90-5|||5|可呼吸性粉塵
16|4-胺基聯苯及其鹽類|4-Aminodiphenyl and its salts|92-67-1|皮瘤|||S甲;禁止製造、輸入、販賣及使用之毒性化學物質
17|2-胺吡啶|2-Aminopyridine|504-29-0||0.5|1.9|
18|氨|Ammonia|7664-41-7||50|35|S丁
19|氯化銨（燻煙）|Ammonium chloride (fume)|12125-02-9|||10|
20|乙酸正戊酯|n-Amyl acetate|628-63-7||100|532|O2
21|乙酸第二戊酯|sec-Amyl acetate|626-38-0||125|665|
22|苯胺|Aniline|62-53-3|皮|2|7.6|
23|甲氧苯胺（鄰、對異構物）|Anisidine (o-, p-isomers)|29191-52-4|皮|0.1|0.5|
24|銻及其化合物（以銻計）|Antimony and its compounds (as Sb)|7440-36-0|||0.5|
25|安妥（α-萘硫脲）|ANTU (α-Naphthyl thiourea)|86-88-4|||0.3|
26|砷及其無機化合物（以砷計）|Arsenic and its inorganic compounds (as As)|7440-38-2|瘤||0.01|S丙3
27|有機砷化合物（以砷計）|Arsenic organic compounds (as As)|7440-38-2|||0.5|S丙3
28|砷化氫|Arsine|7784-42-1||0.05|0.16|S丙3
29|奧黃|Auramine|2465-27-2|瘤|||S丙2
30|谷速松|Azinphos-methyl|86-50-0|皮||0.2|
31|鋇及其可溶性化合物（以鋇計）|Barium and its soluble compounds (as Ba)|7440-39-3|||0.5|
32|苯|Benzene|71-43-2|皮瘤|1|3.2|S丙1
33|聯苯胺及其鹽類|Benzidine and its salts|92-87-5|皮瘤|||S甲;禁止製造、輸入、販賣及使用之毒性化學物質
34|過氧苯醯|Benzoyl peroxide|94-36-0|||5|
35|氯化甲基苯|Benzyl chloride|100-44-7||1|5.2|
36|鈹及其化合物（以鈹計）|Beryllium and its compounds (as Be)|7440-41-7|瘤||0.002|S乙
37|聯苯|Biphenyl|92-52-4||0.2|1.3|
38|聯吡啶|Bipyridine (Dipyridyl)|553-26-4|瘤|||
39|三溴化硼|Boron tribromide|10294-33-4|高|1|10|
40|三氟化硼|Boron trifluoride|7637-07-2|高|1|2.8|
41|溴|Bromine|7726-95-6||0.1|0.66|
42|五氟化溴|Bromine pentafluoride|7789-30-2||0.1|0.72|
43|三溴甲烷|Bromoform|75-25-2|皮|0.5|5.2|
44|1-溴丙烷|1-Bromopropane|106-94-5|皮|0.5|2.6|O2
45|1,3-丁二烯|1,3-Butadiene|106-99-0|瘤|5|11|S丙1
46|正丁烷|n-Butane|106-97-8||800|1900|
47|1-丁硫醇|1-Butanethiol|109-79-5||0.5|1.8|
48|1-丁醇|1-Butanol|71-36-3||100|303|O2
49|2-丁醇|2-Butanol|78-92-2||150|454|O2
50|乙酸正丁酯|n-Butyl acetate|123-86-4||150|712|O2
51|乙酸第二丁酯|sec-Butyl acetate|105-46-4||200|950|
52|乙酸第三丁酯|tert-Butyl acetate|540-88-5||200|950|
53|第三丁醇|tert-Butyl alcohol|75-65-0||100|303|
54|正丁胺|n-Butylamine|109-73-9|皮高|5|15|
55|正丁基縮水甘油醚|n-Butyl glycidyl ether (BGE)|2426-08-6||25|133|
56|乳酸正丁酯|n-Butyl lactate|138-22-7||5|30|
57|鄰-第二丁酚|o-sec-Butylphenol|89-72-5|皮|5|31|
58|對-第三丁基甲苯|p-tert-Butyltoluene|98-51-1||10|61|
59|鎘及其化合物（以鎘計）|Cadmium and its compounds (as Cd)|7440-43-9|瘤||0.05|S丙3
60|砷酸鈣|Calcium arsenate|7778-44-1|||1|S丙3
61|氰胺化鈣|Calcium cyanamide|156-62-7|||0.5|
62|氫氧化鈣|Calcium hydroxide|1305-62-0|||5|
63|氧化鈣|Calcium oxide|1305-78-8|||5|
64|合成樟腦|Camphor (Synthetic)|76-22-2||2|12|
65|己內醯胺（粉塵）|Caprolactam, dust|105-60-2|||1|
66|己內醯胺（蒸氣）|Caprolactam, vapor|105-60-2||5|23|
67|加保利|Carbaryl (Sevin)|63-25-2|||5|
68|加保扶|Carbofuran|1563-66-2|||0.1|
69|碳黑|Carbon black|1333-86-4|||3.5|
70|二氧化碳|Carbon dioxide|124-38-9||5000|9000|煤礦坑內10,000 ppm
71|二硫化碳|Carbon disulfide|75-15-0|皮|10|31|O1
72|一氧化碳|Carbon monoxide|630-08-0||35|40|S丁
73|四氯化碳|Carbon tetrachloride|56-23-5|皮|2|13|O1
74|氫氧化銫|Cesium hydroxide|21351-79-1|||2|
75|氯丹|Chlordane|57-74-9|皮||0.5|禁止製造、輸入、販賣及使用之毒性化學物質
76|氧化氯二苯|Chlorinated diphenyl oxide|55720-99-5|||0.5|
77|氯|Chlorine|7782-50-5|高|0.5|1.5|S丙1
78|二氧化氯|Chlorine dioxide|10049-04-4||0.1|0.28|
79|三氟化氯|Chlorine trifluoride|7790-91-2|高|0.1|0.38|S丙1
80|一氯乙醛|Chloroacetaldehyde|107-20-0|高|1|3.2|
81|α-苯氯乙酮（ω-苯氯乙酮）|α-Chloroacetophenone|532-27-4||0.05|0.32|
82|氯乙醯氯|Chloroacetyl chloride|79-04-9||0.05|0.23|
83|氯苯|Chlorobenzene|108-90-7||75|345|O2
84|溴氯甲烷|Chlorobromomethane|74-97-5||200|1060|
85|2-氯-1,3-丁二烯|2-Chloro-1,3-butadiene|126-99-8|皮|10|36|
86|氯二氟甲烷|Chlorodifluoromethane|75-45-6||1000|3540|
87|氯乙烷|Chloroethane|75-00-3||1000|2640|
88|2-氯乙醇|2-Chloroethanol|107-07-3|皮|1|3.3|
89|二氯甲醚|Bis-Chloromethyl ether|542-88-1|瘤|0.001|0.0047|S甲;禁止製造、輸入、販賣及使用之毒性化學物質
90|氯甲基甲基醚|Chloromethyl methyl ether|107-30-2|瘤|||S甲;禁止製造、輸入、販賣及使用之毒性化學物質
91|1-氯-1-硝基丙烷|1-Chloro-1-nitropropane|600-25-9||2|10|
92|氯五氟乙烷|Chloropentafluoroethane|76-15-3||1000|6320|
93|氯化苦（三氯硝甲烷）|Chloropicrin|76-06-2||0.1|0.67|
94|鄰-氯苯乙烯|o-Chlorostyrene|2039-87-4||50|283|
95|鄰-氯甲苯|o-Chlorotoluene|95-49-8||50|259|
96|鉻金屬（以鉻計）|Chromium metal (as Cr)|7440-47-3|||1|
97|六價鉻化合物（以鉻計）|Chromium (VI) compounds (as Cr)||瘤||0.05|S丙3;鉻酸為丙類第三種特定化學物質
98|二價鉻化合物（以鉻計）|Chromium (II) compounds (as Cr)||||0.5|
99|三價鉻化合物（以鉻計）|Chromium (III) compounds (as Cr)||||0.5|
100|煤焦油瀝青揮發物|Coal tar pitch volatiles|65996-93-2|瘤||0.2|S丙3
101|鈷，金屬燻煙及粉塵（以鈷計）|Cobalt, metal fume and dust (as Co)|7440-48-4|||0.05|S丙3;鈷及其無機化合物為丙類第三種特定化學物質
102|煉焦爐逸散物|Coke-oven emissions||瘤||0.15|
103|銅，燻煙|Copper, fume|7440-50-8|||0.2|
104|銅，粉塵和霧滴（以銅計）|Copper, dust and mist (as Cu)|7440-50-8|||1|
105|棉塵|Cotton dust||||0.2|棉絮除外
106|巴豆醛|Crotonaldehyde|4170-30-3||2|5.7|
107|異丙苯|Cumene (Isopropyl benzene)|98-82-8|皮|50|246|
108|甲酚（包括所有異構物）|Cresol (all isomers)|1319-77-3|皮|5|22|O2
109|氰胺（氰滿素）|Cyanamide|420-04-2|||2|
110|氰化物（以氰根計）|Cyanides (as CN)||皮||5|氰化鉀、氰化鈉為丙類第三種特定化學物質
111|環己胺|Cyclohexylamine|108-91-8||10|41|
112|環己烷|Cyclohexane|110-82-7||300|1030|
113|環己醇|Cyclohexanol|108-93-0|皮|50|206|O2
114|環己酮|Cyclohexanone|108-94-1|皮|25|100|O2
115|1,3-環戊二烯|1,3-Cyclopentadiene|542-92-7||75|203|
116|環戊烷|Cyclopentane|287-92-3||600|1720|
117|2,4-地（2,4-二氯苯氧乙酸）|2,4-D|94-75-7|||10|
118|十硼烷|Decaborane|17702-41-9|皮|0.05|0.25|
119|滅賜松|Demeton|8065-48-3|皮|0.01|0.11|
120|二丙酮醇|Diacetone alcohol|123-42-2||50|238|
121|大利松|Diazinon|333-41-5|皮||0.01|
122|重氮甲烷|Diazomethane|334-88-3|瘤|0.2|0.34|
123|二硼烷|Diborane|19287-45-7||0.1|0.11|
124|磷酸二丁酯|Dibutyl phosphate|107-66-4||1|8.6|
125|鄰苯二甲酸二丁酯|Dibutyl phthalate|84-74-2|||5|
126|鄰-二甲氧基聯苯胺及其鹽類|Dianisidine and its salts|119-90-4|瘤|||S乙
127|二氯乙炔|Dichloroacetylene|7572-29-4|高|0.1|0.39|
128|鄰-二氯苯|o-Dichlorobenzene|95-50-1|高|50|301|O2
129|對-二氯苯|p-Dichlorobenzene|106-46-7||75|450|
130|3,3'-二氯聯苯胺及其鹽類|3,3'-Dichlorobenzidine and its salts|91-94-1|皮瘤|||S乙
131|二氯二氟甲烷|Dichlorodifluoromethane|75-71-8||1000|4950|
132|1,3-二氯-5,5-二甲基乙內醯脲|1,3-Dichloro-5,5-dimethylhydantoin|118-52-5|||0.2|
133|1,1-二氯乙烷|1,1-Dichloroethane|75-34-3||100|405|
134|1,2-二氯乙烷|1,2-Dichloroethane|107-06-2||10|40|O1
135|1,2-二氯乙烯|1,2-Dichloroethylene|540-59-0||200|793|O1
136|二氯乙醚|Dichloroethyl ether|111-44-4|高皮|5|29|
137|二氯甲烷|Dichloromethane (Methylene chloride)|75-09-2|瘤|50|174|O2
138|二氯氟甲烷|Dichloromonofluoromethane|75-43-4||10|42|
139|1,1-二氯-1-硝基乙烷|1,1-Dichloro-1-nitroethane|594-72-9|高|2|12|
140|1,2-二氯丙烷|1,2-Dichloropropane|78-87-5||75|347|
141|1,3-二氯丙烯|1,3-Dichloropropene|542-75-6|皮|1|4.5|
142|2,2-二氯丙酸|2,2-Dichloropropionic acid|75-99-0||1|5.8|
143|1,1,2,2-四氟-1,2-二氯乙烷|1,2-Dichloro-1,1,2,2-tetrafluoroethane|76-14-2||1000|6990|
144|雙特松|Dicrotophos|141-66-2|皮||0.25|
145|二環戊二烯|Dicyclopentadiene|77-73-6||5|27|
146|地特靈|Dieldrin|60-57-1|皮|||禁止製造、輸入、販賣及使用之毒性化學物質
147|二乙醇胺|Diethanolamine|111-42-2||3|13|
148|二乙胺|Diethylamine|109-89-7||10|30|
149|2-二乙胺基乙醇|2-Diethylaminoethanol|100-37-8|皮|10|48|
150|二次乙基三胺|Diethylenetriamine|111-40-0|皮|1|4.2|
151|二乙酮|Diethyl ketone|96-22-0||200|705|
152|鄰苯二甲酸二乙酯|Diethyl phthalate|84-66-2|||5|
153|二溴二氟甲烷|Difluorodibromomethane|75-61-6||100|858|
154|縮水甘油醚|Diglycidyl ether (DGE)|2238-07-5|高|0.1|0.53|
155|二異丁酮|Diisobutyl ketone|108-83-8||25|145|
156|二異丙胺|Diisopropylamine|108-18-9|皮|5|21|
157|N,N-二甲基乙醯胺|N,N-Dimethylacetamide|127-19-5|皮|10|36|
158|二甲胺|Dimethylamine|124-40-3||10|18|
159|N,N-二甲基苯胺|N,N-Dimethylaniline|121-69-7|皮|5|25|
160|二氯松|DDVP (Dichlorvos)|62-73-7|皮|0.1|1|
161|N,N-二甲基甲醯胺|N,N-Dimethylformamide (DMF)|68-12-2|皮|10|30|O2
162|鄰苯二甲酸二甲酯|Dimethyl phthalate|131-11-3|||5|
163|硫酸二甲酯|Dimethyl sulfate|77-78-1|皮|0.1|0.52|S丙1
164|二硝基苯（含異構物）|Dinitrobenzene (all isomers)|25154-54-5|皮|0.15|1|
165|4,6-二硝基-鄰-甲酚|4,6-Dinitro-o-cresol|534-52-1|皮||0.2|
166|2,4-二硝基甲苯|2,4-Dinitrotoluene|25321-14-6|皮||1.5|
167|鄰-苯二甲酸二辛酯|o-Dioctyl phthalate|117-81-7|||5|
168|1,4-二氧陸圜|1,4-Dioxane|123-91-1|皮|25|90|O2
169|大克松|Dioxathion|78-34-2|皮||0.2|
170|二苯胺|Diphenylamine|122-39-4|||10|
171|二丙二醇甲醚|Dipropylene glycol methyl ether|34590-94-8|皮|100|606|
172|二丙基酮|Dipropyl ketone|123-19-3||50|233|
173|二硫松|Disulfoton|298-04-4|皮||0.1|
174|二乙烯苯|Divinylbenzene (DVB)|1321-74-0||10|53|
175|安殺番|Endosulfan|115-29-7|皮||0.1|安殺番35%乳劑為禁用農藥
176|安特靈|Endrin|72-20-8|皮|||禁止製造、輸入、販賣及使用之毒性化學物質
177|一品松|EPN|2104-64-5|皮||0.5|
178|環氧氯丙烷|Epichlorohydrin|106-89-8|皮|2|7.6|
179|1,2-環氧丙烷|1,2-Epoxypropane|75-56-9||20|48|S丙1
180|2,3-環氧丙醇|2,3-Epoxy-1-propanol (Glycidol)|556-52-5||25|76|
181|乙醇胺|Ethanolamine|141-43-5||3|7.5|
182|愛殺松|Ethion|563-12-2|皮||0.4|
183|乙胺|Ethylamine|75-04-7||10|18|
184|乙酸乙酯|Ethyl acetate|141-78-6||400|1440|O2
185|丙烯酸乙酯|Ethyl acrylate|140-88-5||25|102|
186|乙醇|Ethyl alcohol|64-17-5||1000|1880|
187|5-甲基-3-庚酮|Ethyl amyl ketone|541-85-5||25|131|
188|溴乙烷|Ethyl bromide|74-96-4|皮|200|892|
189|3-庚酮|Ethyl butyl ketone|106-35-4||50|234|
190|乙醚|Ethyl ether|60-29-7||400|1210|O2
191|乙二胺（伸乙二胺）|Ethylenediamine|107-15-3|皮|10|25|
192|二溴乙烷|Ethylene dibromide|106-93-4|皮|20|154|禁用農藥
193|乙二醇（霧滴）|Ethylene glycol (mist)|107-21-1|||10|
194|乙二醇（蒸氣）|Ethylene glycol (vapor)|107-21-1|高|50|127|
195|次乙亞胺|Ethylenimine|151-56-4|皮|0.5|0.88|S丙1
196|乙二醇丁醚|Ethylene glycol monobutyl ether|111-76-2|皮|25|121|O2
197|乙二醇乙醚|Ethylene glycol monoethyl ether|110-80-5|皮|5|18|O2
198|乙二醇乙醚醋酸酯|Ethylene glycol monoethyl ether acetate|111-15-9|皮|5|27|O2
199|乙二醇甲醚|Ethylene glycol monomethyl ether|109-86-4|皮|5|16|O2
200|乙二醇甲醚醋酸酯|Ethylene glycol monomethyl ether acetate|110-49-6|皮|5|24|
201|環氧乙烷|Ethylene oxide|75-21-8|瘤|1|1.8|S丙1
202|甲酸乙酯|Ethyl formate|109-94-4||100|303|
203|乙硫醇|Ethyl mercaptan|75-08-1|高|10|25|
204|N-乙基-1,4-氧氮陸圜|N-Ethylmorpholine|100-74-3|皮|5|24|
205|樂乃松|Fenchlorphos (Ronnel)|299-84-3|||10|禁止製造、輸入、販賣及使用之毒性化學物質
206|釩亞鐵合金（粉塵）|Ferrovanadium (dust)|12604-58-9|||1|
207|氟化物（以氟計）|Fluorides (as F)||||2.5|
208|氟|Fluorine|7782-41-4||1|1.6|
209|氟三氯甲烷|Fluorotrichloromethane|75-69-4||1000|5620|
210|甲醯胺|Formamide|75-12-7|皮|20|37|
211|甲醛|Formaldehyde|50-00-0|瘤|0.75|0.9|S丙1
212|甲酸|Formic acid|64-18-6||5|9.4|
213|呋喃甲醛|Furfural|98-01-1|皮|2|7.9|
214|呋喃甲醇|Furfuryl alcohol|98-00-0|皮|10|40|
215|汽油|Gasoline|8006-61-9||300|890|O3;含苯體積比1%以上之汽油為丙類第一種特定化學物質
216|四氫化鍺|Germanium tetrahydride|7782-65-2||0.2|0.63|
217|戊二醛|Glutaraldehyde|111-30-8|高|0.2|0.82|
218|穀粉|Grain dust||||10|
219|鉿|Hafnium|7440-58-6|||0.5|
220|飛佈達|Heptachlor|76-44-8|皮||0.5|禁止製造、輸入、販賣及使用之毒性化學物質
221|正庚烷|n-Heptane|142-82-5||400|1640|
222|六氯丁二烯|Hexachlorobutadiene|87-68-3|皮|0.02|0.21|
223|六氯環戊二烯|Hexachlorocyclopentadiene|77-47-4||0.01|0.11|
224|六氯乙烷|Hexachloroethane|67-72-1|皮|1|9.7|
225|六氯萘|Hexachloronaphthalene|1335-87-1|皮||0.2|
226|六氟丙酮|Hexafluoroacetone|684-16-2|皮|0.1|0.68|
227|六亞甲基二異氰酸酯|Hexamethylene diisocyanate (HDI)|822-06-0||0.005|0.034|
228|正己烷|n-Hexane|110-54-3|皮|50|176|O2
229|己烷異構物|Hexane isomers|||500|1760|
230|乙酸第二己酯|sec-Hexyl acetate|108-84-9||50|295|
231|2-甲基-2,4-戊二醇|Hexylene glycol|107-41-5|高|25|121|
232|溴化氫|Hydrogen bromide|10035-10-6|高|3|9.9|S丙1
233|氯化氫|Hydrogen chloride|7647-01-0|高|5|7.5|S丁
234|聯胺|Hydrazine|302-01-2|皮|0.1|0.13|
235|氰化氫|Hydrogen cyanide|74-90-8|皮|10|11|S丙1
236|氟化氫|Hydrogen fluoride|7664-39-3||3|2.6|S丙1;禁止用於化武
237|過氧化氫|Hydrogen peroxide|7722-84-1||1|1.4|
238|硒化氫|Hydrogen selenide|7783-07-5||0.05|0.16|
239|硫化氫|Hydrogen sulfide|7783-06-4|高|10|14|S丙1
240|氫醌|Hydroquinone|123-31-9|||2|
241|銦及其化合物（以銦計）|Indium and its compounds (as In)|7440-74-6|||0.1|S丙3
242|碘|Iodine|7553-56-2|高|0.1|1|
243|五羰鐵（以鐵計）|Iron pentacarbonyl (as Fe)|13463-40-6||0.1|0.23|
244|氧化鐵（燻煙）|Iron oxide (fume)|1309-37-1|||10|
245|乙酸異戊酯|Isoamyl acetate|123-92-2||100|532|O2
246|異戊醇|Isoamyl alcohol|123-51-3||100|361|O2
247|乙酸異丁酯|Isobutyl acetate|110-19-0||150|713|O2
248|異丁醇|Isobutyl alcohol|78-83-1||50|152|O2
249|異辛醇|Isooctyl alcohol|26952-21-6|皮|50|266|
250|異佛爾酮|Isophorone|78-59-1||5|28|
251|二異氰酸異佛爾酮|Isophorone diisocyanate (IPDI)|4098-71-9||0.005|0.045|S丙1
252|2-異丙氧基乙醇|2-Isopropoxyethanol|109-59-1|皮|25|106|
253|乙酸異丙酯|Isopropyl acetate|108-21-4||250|1040|O2
254|異丙胺|Isopropylamine|75-31-0||5|12|
255|異丙醇|Isopropyl alcohol|67-63-0||400|983|O2
256|異丙苯胺|N-Isopropylaniline|768-52-5|皮|2|11|
257|異丙醚|Isopropyl ether|108-20-3||250|1040|
258|異丙基縮水甘油醚|Isopropyl glycidyl ether (IGE)|4016-14-2||50|238|
259|乙烯酮|Ketene|463-51-4||0.5|0.86|
260|鉛及其無機化合物（以鉛計）|Lead and its inorganic compounds (as Pb)|7439-92-1|||0.05|
261|砷酸鉛|Lead arsenate|7784-40-9|||0.15|S丙3
262|鉻酸鉛（以鉻計）|Lead chromate (as Cr)|7758-97-6|瘤||0.05|S丙3
263|靈丹|Lindane|58-89-9|皮|||禁用農藥;禁止製造、輸入、販賣及使用之毒性化學物質
264|亞麻|Linen||||0.2|
265|液化石油氣|L.P.G. (Liquified petroleum gas)|68476-85-7||1000|1800|
266|氫化鋰|Lithium hydride|7580-67-8|||0.025|
267|苯胺紅（一品紅）|Magenta|632-99-5|瘤|||S丙2
268|氧化鎂（燻煙）|Magnesium oxide (fume)|1309-48-4|||10|
269|馬拉松|Malathion|121-75-5|皮||10|
270|順-丁烯二酐|Maleic anhydride|108-31-6||0.25|1|
271|錳，燻煙（以錳計）|Manganese, fume (as Mn)|7439-96-5|||1|S丙3
272|錳及其無機化合物（以錳計）|Manganese and its inorganic compounds (as Mn)|7439-96-5|高||5|S丙3
273|環戊二烯三羰基錳（以錳計）|Manganese cyclopentadienyl tricarbonyl (as Mn)|12079-65-1|皮||0.1|S丙3
274|汞及其無機化合物（以汞計）|Mercury (Metal and its inorganic compounds) (as Hg)|7439-97-6|皮||0.05|S丙3
275|汞有機化合物（以汞計）|Mercury (Organic compounds) (as Hg)|7439-97-6|皮||0.01|禁用農藥
276|亞異丙基丙酮|Mesityl oxide|141-79-7||15|60|
277|甲基丙烯酸|Methacrylic acid|79-41-4||20|70|
278|4-甲氧苯酚|4-Methoxyphenol|150-76-5|||5|
279|乙酸甲酯|Methyl acetate|79-20-9||200|606|O2
280|丙炔|Methyl acetylene|74-99-7||1000|1640|
281|丙烯酸甲酯|Methyl acrylate|96-33-3|皮|10|35|
282|甲基丙烯腈|Methylacrylonitrile|126-98-7|皮|1|2.7|
283|二甲氧甲烷|Methylal|109-87-5||1000|3110|
284|甲醇|Methyl alcohol|67-56-1|皮|200|262|O2
285|甲胺|Methylamine|74-89-5||10|13|
286|甲基正戊酮|Methyl n-amyl ketone|110-43-0||50|233|
287|N-甲苯胺|N-Methylaniline|100-61-8|皮|0.5|2.2|
288|溴甲烷|Methyl bromide|74-83-9|高皮|5|19|S丙1
289|甲基正丁酮|Methyl n-butyl ketone|591-78-6|皮|5|20|O2
290|氯甲烷|Methyl chloride|74-87-3|皮|50|103|
291|2-氰基丙烯酸甲酯|Methyl 2-cyanoacrylate|137-05-3||2|9.1|
292|甲基環己烷|Methylcyclohexane|108-87-2||400|1610|
293|甲基環己醇|Methylcyclohexanol|25639-42-3||50|234|O2
294|甲基環己酮|Methylcyclohexanone|583-60-8|皮|50|229|O2
295|甲基環戊二烯三羰基錳（以錳計）|Methylcyclopentadienyl manganese tricarbonyl (as Mn)|12108-13-3|皮||0.2|S丙3
296|3,3'-二氯-4,4'-二胺基苯化甲烷|4,4'-Methylene bis(2-chloroaniline) (MOCA)|101-14-4|皮瘤|0.02|0.218|S丙1
297|4,4'-二異氰酸二苯甲烷|Methylene bisphenyl isocyanate (MDI)|101-68-8|高|0.02|0.2|S丙1
298|丁酮|Methyl ethyl ketone|78-93-3||200|590|O2
299|過氧化丁酮|Methyl ethyl ketone peroxide (MEKPO)|1338-23-4|高|0.2|1.5|
300|甲酸甲酯|Methyl formate|107-31-3||100|246|
301|甲基聯胺|Methylhydrazine|60-34-4|皮高|0.2|0.38|
302|碘甲烷|Methyl iodide|74-88-4|皮|2|12|S丙1
303|甲基異戊酮|Methyl isoamyl ketone|110-12-3||50|234|
304|4-甲基-2-戊醇|Methyl isobutyl carbinol|108-11-2|皮|25|104|
305|甲基異丁酮|Methyl isobutyl ketone|108-10-1||50|205|O2
306|異氰酸甲酯|Methyl isocyanate|624-83-9|皮|0.02|0.05|S丙1
307|甲基異丙酮|Methyl isopropyl ketone|563-80-4||200|705|
308|甲硫醇|Methyl mercaptan|74-93-1|高|10|20|
309|甲基丙烯酸甲酯|Methyl methacrylate|80-62-6||100|410|
310|甲基巴拉松|Methyl parathion|298-00-0|皮||0.2|
311|甲丙酮|Methyl propyl ketone|107-87-9||200|705|
312|甲基第三丁基醚|Methyl tert-butyl ether|1634-04-4||40|144|
313|α-甲基苯乙烯|α-Methylstyrene|98-83-9||50|242|
314|雲母石|Mica|12001-26-2|||3|可呼吸性粉塵
315|鉬，可溶性化合物（以鉬計）|Molybdenum (as Mo) soluble compounds|7439-98-7|||5|
316|嗎啉|Morpholine|110-91-8|皮|20|71|
317|石油精（煤溚）|Naphtha (Coal tar)|8030-30-6||100|400|O3
318|萘|Naphthalene|91-20-3||10|52|S丙3
319|α-萘胺|α-Naphthylamine|134-32-7|瘤|||S乙
320|β-萘胺|β-Naphthylamine|91-59-8|瘤|||S甲;禁止製造、輸入、販賣及使用之毒性化學物質
321|鎳，金屬及非溶性化合物（以鎳計）|Nickel, metal and insoluble compounds (as Ni)|7440-02-0|||1|S丙3
322|鎳，可溶性化合物（以鎳計）|Nickel, soluble compounds (as Ni)|7440-02-0|||0.1|S丙3
323|四羰化鎳|Nickel carbonyl|13463-39-3||0.001|0.007|S丙1
324|菸鹼（尼古丁）|Nicotine|54-11-5|皮||0.5|
325|硝酸|Nitric acid|7697-37-2||2|5.2|S丁
326|一氧化氮|Nitric oxide|10102-43-9||25|31|
327|對硝基苯胺|p-Nitroaniline|100-01-6|皮||3|
328|硝基苯|Nitrobenzene|98-95-3|皮|1|5|
329|對-硝基氯苯|p-Nitrochlorobenzene|100-00-5|皮||1|S丙1
330|4-硝基聯苯及其鹽類|4-Nitrodiphenyl and its salts|92-93-3|皮瘤|||S甲;禁止製造、輸入、販賣及使用之毒性化學物質
331|硝乙烷|Nitroethane|79-24-3||100|307|
332|二氧化氮|Nitrogen dioxide|10102-44-0|高|5|9|
333|三氟化氮|Nitrogen trifluoride|7783-54-2||10|29|
334|硝化甘油|Nitroglycerin|55-63-0|高皮|0.2|2|
335|硝基乙二醇|Nitroglycol|628-96-6|皮|0.02|0.12|S丙3
336|硝甲烷|Nitromethane|75-52-5||100|250|
337|1-硝丙烷|1-Nitropropane|108-03-2||25|91|
338|2-硝丙烷|2-Nitropropane|79-46-9||10|36|
339|硝基甲苯|Nitrotoluene|88-72-2|皮|2|11|
340|一氧化二氮|Nitrous oxide|10024-97-2||50|90|
341|正壬烷|n-Nonane|111-84-2||200|1050|
342|八氯萘|Octachloronaphthalene|2234-13-1|皮||0.1|
343|辛烷|Octane|111-65-9||300|1400|
344|油霧滴（礦物性）|Oil mist (Mineral)|8012-95-1|||5|
345|四氧化鋨（以鋨計）|Osmium tetroxide (as Os)|20816-12-0||0.0002|0.0016|
346|草酸|Oxalic acid|144-62-7|||1|
347|氟化氧|Oxygen difluoride|7783-41-7||0.05|0.11|
348|臭氧|Ozone|10028-15-6||0.1|0.2|
349|石蠟，燻煙|Paraffin wax, fume|8002-74-2|||2|
350|巴拉刈|Paraquat|4685-14-7|||0.1|
351|巴拉松|Parathion|56-38-2|皮||0.1|
352|五硼烷|Pentaborane|19624-22-7||0.005|0.013|
353|五氯萘|Pentachloronaphthalene|1321-64-8|皮||0.5|禁止製造、輸入、販賣及使用之毒性化學物質
354|五氯酚及其鈉鹽|Pentachlorophenol and its sodium salts|87-86-5|皮||0.5|S甲;禁止製造、輸入、販賣及使用之毒性化學物質
355|戊烷|Pentane|109-66-0||600|1770|
356|過氯甲基硫醇|Perchloromethyl mercaptan|594-42-3||0.1|0.76|
357|過氯酸氟|Perchloryl fluoride|7616-94-6||3|13|
358|酚|Phenol|108-95-2|皮|5|19|S丁
359|吩噻嗪|Phenothiazine|92-84-2|皮||5|
360|對-苯二胺|p-Phenylenediamine|106-50-3|||0.1|
361|苯乙烷|Phenylethane (Ethylbenzene)|100-41-4||100|434|
362|苯醚，蒸氣|Phenyl ether, vapor|101-84-8||1|7|
363|苯基縮水甘油醚|Phenyl glycidyl ether (PGE)|122-60-1||1|6.1|
364|苯肼|Phenylhydrazine|100-63-0|皮|5|22|
365|苯硫醇|Phenyl mercaptan|108-98-5||0.5|2.3|
366|苯膦|Phenylphosphine|638-21-1|高|0.05|0.23|
367|福瑞松|Phorate|298-02-2|皮||0.05|
368|美文松|Phosdrin (Mevinphos)|7786-34-7|皮|0.01|0.092|
369|光氣|Phosgene|75-44-5||0.1|0.4|S丁
370|磷化氫|Phosphine|7803-51-2||0.3|0.4|
371|磷酸|Phosphoric acid|7664-38-2|||1|
372|黃磷|Phosphorus (yellow)|7723-14-0|||0.1|甲類特定化學物質黃磷火柴
373|氧氯化磷|Phosphorus oxychloride|10025-87-3||0.1|0.63|S丙1
374|五氯化磷|Phosphorus pentachloride|10026-13-8|||1|
375|五硫化磷|Phosphorus pentasulfide|1314-80-3|||1|
376|三氯化磷|Phosphorus trichloride|7719-12-2||0.2|1.1|
377|鄰苯二甲酐|Phthalic anhydride|85-44-9||1|6.1|
378|二腈苯|Phthalodinitrile|626-17-5|||5|
379|苦味酸|Picric acid|88-89-1|||0.1|
380|1,4-二氮環己烷二鹽酸鹽|Piperazine dihydrochloride|142-64-3|||5|
381|鉑（以鉑計）金屬|Platinum (as Pt) Metal|7440-06-4|||1|
382|鉑，可溶性鹽類（以鉑計）|Platinum (as Pt) Soluble salts|7440-06-4|||0.002|
383|多氯聯苯|Polychlorobiphenyls|1336-36-3|皮||0.01|S甲;禁止製造、輸入、販賣及使用之毒性化學物質
384|丙烷|Propane|74-98-6||1000|1800|
385|丙酸|Propionic acid|79-09-4||10|30|
386|1-丙醇|1-Propanol|71-23-8|皮|200|491|
387|β-丙內酯|β-Propiolactone|57-57-8||||S丙1
388|乙酸正丙酯|n-Propyl acetate|109-60-4||200|835|O2
389|硝酸正丙酯|n-Propyl nitrate (NPN)|627-13-4||25|107|
390|丙二醇二硝酸酯|Propylene glycol dinitrate|6423-43-4|皮|0.05|0.34|
391|丙二醇甲醚|Propylene glycol monomethyl ether|107-98-2||100|369|
392|丙烯亞胺|Propyleneimine|75-55-8|皮|2|4.7|
393|除蟲菊|Pyrethrum|8003-34-7|||5|
394|吡啶|Pyridine|110-86-1||5|16|
395|醌|Quinone|106-51-4||0.1|0.44|
396|間苯二酚（雷瑣辛）|Resorcinol|108-46-3||10|45|
397|銠（以銠計）金屬燻煙及非溶性化合物|Rhodium (as Rh), metal fume and insoluble compounds|7440-16-6|||0.1|
398|銠（以銠計）可溶性化合物|Rhodium (as Rh), soluble compounds|7440-16-6|||0.01|
399|魚籐精|Rotenone|83-79-4|||5|
400|硒化合物（以硒計）|Selenium compounds (as Se)|7782-49-2|||0.2|
401|六氟化硒|Selenium hexafluoride (as Se)|7783-79-1||0.05|0.16|
402|四氫化矽|Silicon hydride (Silane)|7803-62-5||5|6.6|
403|銀，金屬粉塵、燻煙及可溶性化合物（以銀計）|Silver, metal dust, fume and soluble compounds (as Ag)|7440-22-4|||0.01|
404|疊氮化鈉|Sodium azide (as HN3)|26628-22-8|高|0.11|0.29|
405|亞硫酸氫鈉|Sodium bisulfite|7631-90-5|||5|
406|氟乙酸鈉|Sodium fluoroacetate|62-74-8|皮||0.05|
407|氫氧化鈉|Sodium hydroxide|1310-73-2|||2|
408|氫化銻|Stibine (antimony hydride)|7803-52-3||0.1|0.51|
409|斯多德爾溶劑|Stoddard solvent (White spirits)|8052-41-3||100|525|
410|苯乙烯|Styrene|100-42-5||50|213|O2
411|二氧化硫|Sulfur dioxide|7446-09-5||2|5.2|S丁
412|六氟化硫|Sulfur hexafluoride|2551-62-4||1000|5970|
413|一氯化硫|Sulfur monochloride|10025-67-9||1|5.5|
414|硫酸|Sulfuric acid|7664-93-9|||1|S丁
415|五氟化硫|Sulfur pentafluoride|5714-22-7||0.01|0.1|
416|四氟化硫|Sulfur tetrafluoride|7783-60-0|高|0.1|0.44|
417|氟化硫醯|Sulfuryl fluoride|2699-79-8||5|21|
418|滑石（不含石綿纖維）|Talc (containing no asbestos fibers)|14807-96-6|||2|可呼吸性粉塵
419|鉭，金屬及氧化性粉塵|Tantalum, metal and oxide dust|7440-25-7|||5|
420|碲及其化合物（以碲計）|Tellurium and compounds (as Te)|13494-80-9|||0.1|
421|帖普|TEPP|107-49-3|皮|0.004|0.047|
422|聯三苯|Terphenyls|26140-60-3|高|0.53|5|
423|1,1,1,2-四氯-2,2-二氟乙烷|1,1,1,2-Tetrachloro-2,2-difluoroethane|76-11-9||500|4170|
424|1,1,2,2-四氯-1,2-二氟乙烷|1,1,2,2-Tetrachloro-1,2-difluoroethane|76-12-0||500|4170|
425|1,1,2,2-四氯乙烷|1,1,2,2-Tetrachloroethane|79-34-5|皮|1|6.9|O1
426|四氯乙烯|Tetrachloroethylene|127-18-4||50|339|O2
427|四氯萘|Tetrachloronaphthalene|1335-88-2|||2|
428|四乙基鉛|Tetraethyl lead (as Pb)|78-00-2|皮||0.075|
429|四甲基鉛（以鉛計）|Tetramethyl lead (as Pb)|75-74-1|皮||0.075|
430|四氫呋喃|Tetrahydrofuran (THF)|109-99-9||200|590|O2
431|四甲基琥珀腈|Tetramethyl succinonitrile|3333-52-6|皮|0.5|2.8|
432|四硝甲烷|Tetranitromethane|509-14-8||1|8|
433|焦磷酸四鈉|Tetrasodium pyrophosphate|7722-88-5|||5|
434|乙硫醇酸|Thioglycolic acid|68-11-1|皮|1|3.8|
435|亞硫醯氯|Thionyl chloride|7719-09-7|高|1|4.9|
436|得恩地|Thiram|137-26-8|||5|
437|錫及錫無機化合物（以錫計）|Tin and its inorganic compounds (as Sn)|7440-31-5|||2|除氫化錫及二氧化錫外含錫量
438|錫有機化合物（以錫計）|Tin organic compounds (as Sn)||皮||0.1|含錫量
439|氧化錫（以錫計）|Tin oxide (as Sn)||||2|
440|二氧化鈦|Titanium dioxide|13463-67-7|||10|
441|鄰-二甲基聯苯胺及其鹽類|o-Tolidine and its salts|119-93-7|皮|||S乙
442|鄰-甲苯胺|o-Toluidine|95-53-4|皮|5|22|
443|間-甲苯胺|m-Toluidine|108-44-1|皮|2|8.8|
444|對-甲苯胺|p-Toluidine|106-49-0|皮|2|8.8|
445|甲苯|Toluene|108-88-3|皮|50|188|O2
446|2,4-二異氰酸甲苯或2,6-二異氰酸甲苯|Toluene-2,4/2,6-diisocyanate (TDI)|584-84-9|高|0.005|0.036|S丙1
447|毒殺芬|Toxaphene|8001-35-2|皮||0.5|禁止輸入、製造、使用及販賣之毒性化學物質
448|磷酸三丁酯|Tributyl phosphate (TBP)|126-73-8||0.2|2.2|
449|三氯乙酸|Trichloroacetic acid (TCA)|76-03-9||1|6.7|
450|1,2,4-三氯苯|1,2,4-Trichlorobenzene|120-82-1|高|5|37|
451|1,1,1-三氯乙烷|1,1,1-Trichloroethane (Methylchloroform)|71-55-6||350|1910|O2
452|1,1,2-三氯乙烷|1,1,2-Trichloroethane|79-00-5|皮|10|55|O2
453|三氯乙烯|Trichloroethylene|79-01-6||50|269|O1
454|三氯甲烷（氯仿）|Trichloromethane (Chloroform)|67-66-3|高|10|49|O1
455|三氯萘|Trichloronaphthalene|1321-65-9|皮||5|
456|1,2,3-三氯丙烷|1,2,3-Trichloropropane|96-18-4||50|302|
457|1,1,2-三氯-1,2,2-三氟乙烷|1,1,2-Trichloro-1,2,2-trifluoroethane|76-13-1||1000|7670|
458|三乙胺|Triethylamine|121-44-8||10|41|
459|三氟溴甲烷|Trifluorobromomethane|75-63-8||1000|6090|
460|1,2,4-偏苯三酸酐|Trimellitic anhydride|552-30-7||0.005|0.04|
461|三甲胺|Trimethylamine|75-50-3||10|24|
462|三甲苯|Trimethylbenzene|25551-13-7||25|123|
463|亞磷酸三甲酯|Trimethyl phosphite|121-45-9||2|10|
464|2,4,6-三硝基甲苯|2,4,6-Trinitrotoluene (TNT)|118-96-7|皮||0.5|
465|三鄰甲苯基磷酸酯|Triorthocresyl phosphate (TOCP)|78-30-8|皮||0.1|
466|三苯基胺|Triphenylamine|603-34-9|||5|
467|磷酸三苯酯|Triphenyl phosphate|115-86-6|||3|
468|鎢，非溶性化合物（以鎢計）|Tungsten (as W) insoluble compounds|7440-33-7|||5|
469|鎢，可溶性化合物（以鎢計）|Tungsten (as W) soluble compounds|7440-33-7|||1|
470|松節油|Turpentine|8006-64-2||100|556|O3
471|鈾，可溶性化合物（以鈾計）|Uranium (as U) soluble compounds|7440-61-1|瘤||0.2|
472|鈾，非溶性化合物（以鈾計）|Uranium (as U) insoluble compounds|7440-61-1|||0.2|
473|正戊醛|n-Valeraldehyde|110-62-3||50|176|
474|五氧化二釩粉塵|Vanadium pentaoxide dust|1314-62-1|高||0.5|S丙3
475|五氧化二釩燻煙|Vanadium pentaoxide fume|1314-62-1|高||0.1|S丙3
476|醋酸乙烯酯|Vinyl acetate|108-05-4||10|35|
477|溴乙烯|Vinyl bromide|593-60-2|瘤|5|22|
478|氯乙烯|Vinyl chloride|75-01-4|瘤|1|2.6|S丙1
479|二氧化環己烯乙烯|Vinylcyclohexene dioxide|106-87-6|皮瘤|10|57|
480|乙烯基甲苯|Vinyltoluene|25013-15-4||100|482|
481|殺鼠靈|Warfarin|81-81-2|||0.1|
482|木粉|Wood dust||||5|
483|二甲苯（含鄰、間、對異構物）|Xylenes (o-, m-, p-isomer)|1330-20-7||100|434|O2
484|二甲苯胺|Xylidine|1300-73-8|皮瘤|2|10|
485|釔，金屬及其化合物（以釔計）|Yttrium, metal and its compounds (as Y)|7440-65-5|||1|
486|氯化鋅（燻煙）|Zinc chloride (fume)|7646-85-7|||1|
487|鉻酸鋅（以鉻酸計）|Zinc chromates (as CrO3)|13530-65-9|高瘤||0.05|S丙3
488|氧化鋅（燻煙）|Zinc oxide (fume)|1314-13-2|||5|
489|鋯化合物（以鋯計）|Zirconium compounds (as Zr)|7440-67-7|||5|`,

TOX: `001|01|多氯聯苯|Polychlorinated biphenyls|1336-36-3|0.1|50|1,2
002|01|可氯丹|Chlordane|57-74-9|1|50|1,3
003|01|石綿|Asbestos|1332-21-4|1|500|2
004|01|地特靈|Dieldrin|60-57-1|1|50|1,3
005|01|滴滴涕|DDT|50-29-3|1|50|1,3
005|02|甲氧滴滴涕|Methoxychlor|72-43-5|0.1|50|1,3,4
006|01|毒殺芬|Toxaphene|8001-35-2|1|50|1
007|01|五氯酚|Pentachlorophenol|87-86-5|0.01|50|1,3
007|02|月桂酸五氯苯酯|Pentachlorophenyl laurate|3772-94-9|0.01|50|1,3
008|01|五氯酚鈉|Sodium pentachlorophenate|131-52-2|0.01|50|3
009|01|甲基汞|Methylmercury|22967-92-6|1|50|1
010|01|安特靈|Endrin|72-20-8|1|50|1,3
011|01|飛佈達|Heptachlor|76-44-8|1|50|1,3
012|01|蟲必死|Hexachlorocyclohexane|319-84-6|1|50|1,3
013|01|阿特靈|Aldrin|309-00-2|1|50|1,3
014|01|二溴氯丙烷|1,2-Dibromo-3-chloropropane (DBCP)|96-12-8|1|50|1,2,3
015|01|福賜松|Leptophos|21609-90-5|1|50|1,3
016|01|克氯苯|Chlorobenzilate|510-15-6|1|50|1,3
017|01|護谷|Nitrofen|1836-75-5|1|50|2
018|01|達諾殺|Dinoseb|88-85-7|1|50|1,3
019|01|靈丹|Lindane|58-89-9|1|50|1,3
022|01|汞|Mercury|7439-97-6|95|50|1
023|01|五氯硝苯|Pentachloronitrobenzene|82-68-8|1|50|1
024|01|亞拉生長素|Daminozide|1596-84-5|1|50|1
025|01|氰乃淨|Cyanazine|21725-46-2|1|50|2
026|01|樂乃松|Fenchlorphos|299-84-3|1|50|1
027|01|四氯丹|Captafol|2425-06-1|1|50|2,3
028|01|蓋普丹|Captan|133-06-2|1|50|1,3
029|01|福爾培|Folpet|133-07-3|1|50|3
030|01|錫蟎丹|Cyhexatin|13121-70-5|1|50|3
031|01|α-氰溴甲苯|α-Bromobenzyl cyanide|5798-79-8|1|50|3
032|01|二氯甲醚|Bis-Chloromethyl ether|542-88-1|1|50|2,3
033|01|對-硝基聯苯|p-Nitrobiphenyl|92-93-3|1|50|1,2
034|01|對-胺基聯苯|p-Aminobiphenyl|92-67-1|1|50|2
034|02|對-胺基聯苯鹽酸鹽|p-Aminobiphenyl hydrochloride|2113-61-3|1|50|2
035|01|2-萘胺|2-Naphthylamine|91-59-8|1|50|1,2
035|02|2-萘胺醋酸鹽|2-Naphthylamine acetate|553-00-4|1|50|1,2
035|03|2-萘胺鹽酸鹽|2-Naphthylamine hydrochloride|612-52-2|1|50|1,2
036|01|聯苯胺|Benzidine|92-87-5|1|50|2
036|02|聯苯胺醋酸鹽|Benzidine acetate|36341-27-2|1|50|2
036|03|聯苯胺硫酸鹽|Benzidine sulfate|531-86-2|1|50|2
036|04|聯苯胺二鹽酸鹽|Benzidine dihydrochloride|531-85-1|1|50|2
036|05|聯苯胺二氫氟酸鹽|Benzidine dihydrofluoride|41766-73-8|1|50|2
036|06|聯苯胺過氯酸鹽（一）|Benzidine perchlorate|29806-76-6|1|50|2
036|07|聯苯胺過氯酸鹽（二）|Benzidine perchlorate|38668-12-1|1|50|2
036|08|聯苯胺二過氯酸鹽|Benzidine diperchlorate|41195-21-5|1|50|2
037|01|鎘|Cadmium|7440-43-9|95|500|2,3
037|02|氧化鎘|Cadmium oxide|1306-19-0|1|500|2,3
037|03|碳酸鎘|Cadmium carbonate|513-78-0|1|500|2,3
037|04|硫化鎘|Cadmium sulfide|1306-23-6|1|500|2,3
037|05|硫酸鎘|Cadmium sulfate|10124-36-4|1|500|2,3
037|06|硝酸鎘|Cadmium nitrate|10325-94-7|1|500|2,3
037|07|氯化鎘|Cadmium chloride|10108-64-2|1|500|2,3
038|01|苯胺|Aniline|62-53-3|1|50|3
039|01|鄰-甲苯胺|o-Aminotoluene|95-53-4|1|50|1
039|02|間-甲苯胺|m-Aminotoluene|108-44-1|1|50|1
039|03|對-甲苯胺|p-Aminotoluene|106-49-0|1|50|1
040|01|1-萘胺|1-Naphthylamine|134-32-7|1|50|1
041|01|二甲氧基聯苯胺|3,3'-Dimethoxybenzidine|119-90-4|1|50|1
042|01|二氯聯苯胺|3,3'-Dichlorobenzidine|91-94-1|1|50|1,2
043|01|鄰-二甲基聯苯胺|3,3'-Dimethylbenzidine (o-Tolidine)|119-93-7|1|50|1
044|01|三氯甲苯|Trichloromethyl benzene|98-07-7|1|50|1,3
045|01|三氧化二砷|Arsenic trioxide|1327-53-3|1|50|1,2,3
045|02|五氧化二砷|Arsenic pentoxide|1303-28-2|1|50|2,3
046|01|氰化鈉|Sodium cyanide|143-33-9|1（氰離子）|500|3
046|02|氰化鉀|Potassium cyanide|151-50-8|1（氰離子）|500|3
046|03|氰化銀|Silver cyanide|506-64-9|1（氰離子）|500|3
046|04|氰化亞銅|Copper(I) cyanide|544-92-3|1（氰離子）|500|3
046|05|氰化鉀銅|Copper(I) potassium cyanide|13682-73-0|1（氰離子）|500|3
046|06|氰化鎘|Cadmium cyanide|542-83-6|1（氰離子）|500|3
046|07|氰化鋅|Zinc cyanide|557-21-1|1（氰離子）|500|3
046|08|氰化銅|Copper(II) cyanide|14763-77-0|1（氰離子）|500|3
046|09|氰化銅鈉|Copper sodium cyanide|14264-31-4|1（氰離子）|500|3
047|01|光氣|Phosgene|75-44-5|1|5|1,3
048|01|異氰酸甲酯|Methyl isocyanate|624-83-9|1|5|3
049|01|氯|Chlorine|7782-50-5|1|50|3
050|01|丙烯醯胺|Acrylamide|79-06-1|30|50|2,3
051|01|丙烯腈|Acrylonitrile|107-13-1|50|50|1,2
052|01|苯|Benzene|71-43-2|70|50|1,2
053|01|四氯化碳|Carbon tetrachloride|56-23-5|50|50|1
054|01|三氯甲烷|Chloroform|67-66-3|50|50|1
055|01|三氧化鉻（鉻酸）|Chromium(VI) trioxide|1333-82-0|1（六價鉻）|500|2
055|02|重鉻酸鉀|Potassium dichromate|7778-50-9|1（六價鉻）|500|2
055|03|重鉻酸鈉|Sodium dichromate|10588-01-9|1（六價鉻）|500|2
055|04|重鉻酸銨|Ammonium dichromate|7789-09-5|1（六價鉻）|500|2
055|05|重鉻酸鈣|Calcium dichromate|14307-33-6|1（六價鉻）|500|2
055|06|重鉻酸銅|Cupric dichromate|13675-47-3|1（六價鉻）|500|2
055|07|重鉻酸鋰|Lithium dichromate|13843-81-7|1（六價鉻）|500|2
055|08|重鉻酸汞|Mercuric dichromate|7789-10-8|1（六價鉻）|500|2
055|09|重鉻酸鋅|Zinc dichromate|14018-95-2|1（六價鉻）|500|2
055|10|鉻酸銨|Ammonium chromate|7788-98-9|1（六價鉻）|500|2
055|11|鉻酸鋇|Barium chromate|10294-40-3|1（六價鉻）|500|2
055|12|鉻酸鈣|Calcium chromate|13765-19-0|1（六價鉻）|500|2
055|13|鉻酸銅|Cupric chromate|13548-42-0|1（六價鉻）|500|2
055|14|鉻酸鐵|Ferric chromate|10294-52-7|1（六價鉻）|500|2
055|15|鉻酸鉛|Lead chromate|7758-97-6|1（六價鉻）|500|2
055|16|鉻酸氧鉛|Lead chromate oxide|18454-12-1|1（六價鉻）|500|2
055|17|鉻酸鋰|Lithium chromate|14307-35-8|1（六價鉻）|500|2
055|18|鉻酸鉀|Potassium chromate|7789-00-6|1（六價鉻）|500|2
055|19|鉻酸銀|Silver chromate|7784-01-2|1（六價鉻）|500|2
055|20|鉻酸鈉|Sodium chromate|7775-11-3|1（六價鉻）|500|2
055|21|鉻酸錫|Stannic chromate|38455-77-5|1（六價鉻）|500|2
055|22|鉻酸鍶|Strontium chromate|7789-06-2|1（六價鉻）|500|2
055|23|鉻酸鋅（鉻酸鋅氫氧化合物）|Zinc chromate|13530-65-9|1（六價鉻）|500|2
055|24|六羰鉻|Chromium carbonyl|13007-92-6|1（鉻）|500|2
055|25|鉻化砷酸銅|Chromated Copper Arsenate|37337-13-6|1|500|2
055|26|鉬鉻紅|Lead chromate molybdate sulphate red|12656-85-8|1（六價鉻）|500|2
055|27|硫鉻酸鉛|Lead sulfochromate yellow|1344-37-2|1（六價鉻）|500|2
056|01|2,4,6-三氯酚|2,4,6-Trichlorophenol|88-06-2|1|50|1,2
056|02|2,4,5-三氯酚|2,4,5-Trichlorophenol|95-95-4|1|50|1,2
057|01|氯甲基甲基醚|Chloromethyl methyl ether|107-30-2|1|50|1,2,3
058|01|六氯苯|Hexachlorobenzene|118-74-1|1|50|1
059|01|次硫化鎳|Trinickel disulfide|12035-72-2|1|50|2
060|01|二溴乙烷（二溴乙烯）|Ethylene dibromide|106-93-4|10|50|1,2
061|01|環氧乙烷|Ethylene oxide|75-21-8|1|50|1,2
062|01|1,3-丁二烯|1,3-Butadiene|106-99-0|50|50|2
063|01|四氯乙烯|Tetrachloroethylene|127-18-4|10|350|1,2
064|01|三氯乙烯|Trichloroethylene|79-01-6|10|50|1,2
065|01|氯乙烯|Vinyl chloride|75-01-4|50|50|2
066|01|甲醛|Formaldehyde|50-00-0|15|50|2,3
067|01|4,4'-亞甲雙(2-氯苯胺)|4,4'-Methylenebis(2-chloroaniline)|101-14-4|1|500|1,2
068|01|鄰苯二甲酸二(2-乙基己基)酯|DEHP|117-81-7|10|50|1,2
068|02|鄰苯二甲酸二辛酯|DNOP|117-84-0|10|50|1
068|03|鄰苯二甲酸丁基苯甲酯|BBP|85-68-7|10|50|1,2
068|04|鄰苯二甲酸二異壬酯|DINP|28553-12-0|10|50|1
068|05|鄰苯二甲酸二異癸酯|DIDP|26761-40-0|10|50|1
068|06|鄰苯二甲酸二乙酯|DEP|84-66-2|10|50|1
068|07|鄰苯二甲酸二烷基酯（C7-11支鏈及直鏈）|DHNUP|68515-42-4|10|-|4
068|08|鄰苯二甲酸二烷基酯（C6-8支鏈，富含C7）|DIHP|71888-89-6|10|-|4
068|09|鄰苯二甲酸二丙酯|DPP|131-16-8|10|-|4
068|10|鄰苯二甲酸二異丁酯|DIBP|84-69-5|10|50|1,2
068|11|鄰苯二甲酸二戊酯|DNPP|131-18-0|10|-|4
068|12|鄰苯二甲酸二己酯|DNHP|84-75-3|10|-|4
068|13|鄰苯二甲酸二環己酯|DCHP|84-61-7|10|-|4
068|14|鄰苯二甲酸二異辛酯|DIOP|27554-26-3|10|-|4
068|15|鄰苯二甲酸二正壬酯|DNP|84-76-4|10|-|4
068|16|鄰苯二甲酸二（4-甲基-2-戊基）酯|BMPP|146-50-9|10|-|4
068|17|鄰苯二甲酸二甲氧乙酯|BMEP|117-82-8|10|-|4
068|18|鄰苯二甲酸雙-2-乙氧基乙酯|BEEP|605-54-9|10|-|4
068|19|鄰苯二甲酸己基2-乙基己基酯|HEHP|75673-16-4|10|-|4
068|20|鄰苯二甲酸二丁氧基乙酯|BBEP|117-83-9|10|-|4
068|21|鄰苯二甲酸二苯酯|Diphenyl phthalate|84-62-8|10|-|4
068|22|鄰苯二甲酸二苄酯|Dibenzyl phthalate|523-31-9|10|-|4
068|23|鄰苯二甲酸單(2-乙基己基)酯|MEHP|4376-20-9|10|-|4
068|24|鄰苯二甲酸單丁酯|MNBP|131-70-4|10|-|4
069|01|1,3-二氯苯|1,3-Dichlorobenzene|541-73-1|1|50|1
069|02|鄰-二氯苯|o-Dichlorobenzene|95-50-1|1|50|1
070|01|1,2,4-三氯苯|1,2,4-Trichlorobenzene|120-82-1|1|50|1
071|01|乙二醇乙醚|2-Ethoxyethanol|110-80-5|1|50|2
071|02|乙二醇甲醚|2-Methoxyethanol|109-86-4|1|50|2
072|01|環氧氯丙烷|Epichlorohydrin|106-89-8|1|50|2
073|01|鄰苯二甲酐|Phthalic anhydride|85-44-9|1|50|3
074|01|二異氰酸甲苯|Toluene diisocyanate|26471-62-5|1|500|3
075|01|1,2-二氯乙烷|1,2-Dichloroethane|107-06-2|15|-|4
076|01|1,1,2,2-四氯乙烷|1,1,2,2-Tetrachloroethane|79-34-5|1|-|4
077|01|1,2-二氯乙烯|1,2-Dichloroethylene|540-59-0|25|-|4
077|02|1,1-二氯乙烯|1,1-Dichloroethylene|75-35-4|25|-|4
078|01|氯甲烷|Chloromethane|74-87-3|25|-|4
079|01|二氯甲烷|Dichloromethane|75-09-2|25|-|4
080|01|鄰苯二甲酸二甲酯|DMP|131-11-3|10|50|1
080|02|鄰苯二甲酸二丁酯|DBP|84-74-2|10|50|1,2
081|01|異丙苯|Cumene|98-82-8|1|-|4
082|01|環己烷|Cyclohexane|110-82-7|1|-|4
083|01|氯乙酸|Chloroacetic acid|79-11-8|1|-|4
084|01|氯甲酸乙酯|Ethyl chloroformate|541-41-3|1|-|4
085|01|2,4-二硝基酚|2,4-Dinitrophenol|51-28-5|1|50|1,3
086|01|硫酸二甲酯|Dimethyl sulfate|77-78-1|1|50|2,3
087|01|次乙亞胺|Ethyleneimine|151-56-4|1|50|2,3
088|01|二氯異丙醚|Bis(2-chloro-1-methylethyl) ether|108-60-1|1|50|1
089|01|二硫化碳|Carbon disulfide|75-15-0|1|50|1
090|01|氯苯|Chlorobenzene|108-90-7|1|50|1
091|01|十溴二苯醚|Decabromodiphenyl ether|1163-19-5|1|50|1,2
091|02|八溴二苯醚|Octabromodiphenyl ether|32536-52-0|1|50|1
091|03|五溴二苯醚|Pentabromodiphenyl ether|32534-81-9|1|50|1
091|04|四溴二苯醚|Tetrabromodiphenyl ether (BDE-47)|40088-47-9|1|50|1
091|05|2,2',4,4',5,5'-六溴二苯醚|BDE-153|68631-49-2|1|50|1
091|06|2,2',4,4',5,6'-六溴二苯醚|BDE-154|207122-15-4|1|50|1
091|07|2,2',3,3',4,5',6-七溴二苯醚|BDE-175|446255-22-7|1|50|1
091|08|2,2',3,4,4',5',6-七溴二苯醚|BDE-183|207122-16-5|1|50|1
092|01|二苯駢呋喃|Dibenzofuran|132-64-9|70|50|1
093|01|1,4-二氧陸圜|1,4-Dioxane|123-91-1|1|50|1
094|01|二氯萘|Dichloronaphthalene|1825-31-6|1|50|1
094|02|三氯萘|Trichloronaphthalene|1321-65-9|1|50|1
094|03|四氯萘|Tetrachloronaphthalene|1335-88-2|1|50|1
094|04|五氯萘|Pentachloronaphthalene|1321-64-8|1|50|1
094|05|六氯萘|Hexachloronaphthalene|1335-87-1|1|50|1
094|06|七氯萘|Heptachloronaphthalene|32241-08-0|1|50|1
094|07|八氯萘|Octachloronaphthalene|2234-13-1|1|50|1
095|01|碘甲烷|Methyl iodide|74-88-4|1|50|1
096|01|β-丙內酯|β-Propiolactone|57-57-8|1|50|1
097|01|吡啶|Pyridine|110-86-1|1|50|1
098|01|二甲基甲醯胺|N,N-Dimethylformamide|68-12-2|30|50|2
098|02|甲醯胺|Formamide|75-12-7|10|50|1,2
099|01|四羰化鎳|Nickel carbonyl|13463-39-3|1|50|2
100|01|丙烯醛|Acrolein|107-02-8|1|50|3
101|01|丙烯醇|Allyl alcohol|107-18-6|1|50|3
102|01|1,2-二苯基聯胺|1,2-Diphenylhydrazine|122-66-7|1|50|3
103|01|氰化氫|Hydrogen cyanide|74-90-8|1|50|3
104|01|乙醛|Acetaldehyde|75-07-0|1|-|4
105|01|乙腈|Acetonitrile|75-05-8|1|-|4
106|01|苯甲氯|Benzyl chloride|100-44-7|1|-|4
107|01|丙烯酸丁酯|Butyl acrylate|141-32-2|1|-|4
108|01|丁醛|Butyraldehyde|123-72-8|1|-|4
109|01|氰胺化鈣|Calcium cyanamide|156-62-7|1|-|4
110|01|六氯內-甲烯基四氫苯二甲酸|Chlorendic acid|115-28-6|1|-|4
111|01|氯丁二烯|Chloroprene|126-99-8|1|-|4
112|01|間-甲酚|m-Cresol|108-39-4|1|-|4
113|01|1,3-二氯丙烯|1,3-Dichloropropene|542-75-6|50|-|4
114|01|二乙醇胺|Diethanolamine|111-42-2|50|-|4
115|01|二苯胺|Diphenylamine|122-39-4|1|-|4
116|01|乙苯|Ethylbenzene|100-41-4|70|-|4
117|01|甲基異丁酮|Methyl isobutyl ketone|108-10-1|1|-|4
118|01|4,4'-二胺基二苯甲烷|4,4'-Methylenedianiline|101-77-9|1|-|4
119|01|三乙酸基氨|Nitrilotriacetic acid|139-13-9|1|-|4
120|01|1,3-丙烷磺內酯|Propane sultone|1120-71-4|1|-|4
121|01|三乙胺|Triethylamine|121-44-8|1|-|4
122|01|α-苯氯乙酮（ω-苯氯乙酮）|α-Chloroacetophenone|532-27-4|1|50|1,3
123|01|蒽|Anthracene|120-12-7|10|50|1
124|01|二溴甲烷|Dibromomethane|74-95-3|1|50|1
125|01|三溴甲烷（溴仿）|Bromoform|75-25-2|1|50|1
126|01|氯乙烷|Chloroethane|75-00-3|1|50|1
128|01|六氯芬|Hexachlorophene|70-30-4|10|50|1
129|01|硝苯|Nitrobenzene|98-95-3|10|50|1
131|01|硫酸乙酯（硫酸二乙酯）|Diethyl sulfate|64-67-5|1|50|2
132|01|六甲基磷酸三胺|Hexamethylphosphoramide (HMPA)|680-31-9|1|50|2
133|01|N-亞硝-正-甲脲|N-Nitroso-N-methylurea|684-93-5|1|50|2
134|01|N-亞硝二甲胺（二甲亞硝胺）|N-Nitrosodimethylamine|62-75-9|1|50|2
134|02|N-亞硝二乙胺（二乙亞硝胺）|N-Nitrosodiethylamine|55-18-5|1|50|2
135|01|三(2,3-二溴丙基)-磷酸酯|Tris(2,3-dibromopropyl) phosphate|126-72-7|1|50|2
136|01|溴乙烯|Vinyl bromide|593-60-2|1|50|2
137|01|4,6-二硝基-鄰-甲酚|4,6-Dinitro-o-cresol|534-52-1|1|50|3
138|01|甲基聯胺|Methyl hydrazine|60-34-4|1|50|3
139|01|氟乙醯胺|Monofluoroacetamide|640-19-7|1|50|3
140|01|炔丙醇（2-丙炔-1-醇）|Propargyl alcohol|107-19-7|1|50|3
141|01|丙烯亞胺|Propyleneimine|75-55-8|1|50|3
142|01|三氟化硼|Boron trifluoride|7637-07-2|1|-|4
143|01|巴豆醛（2-丁烯醛）|Crotonaldehyde|4170-30-3|1|-|4
144|01|硫脲|Thiourea|62-56-6|1|-|4
145|01|2,4-甲苯二胺|Toluene-2,4-diamine|95-80-7|1|-|4
145|02|甲苯二胺（同分異構物混合物）|Toluenediamines (mixed isomers)|25376-45-8|1|-|4
146|01|醋酸乙烯酯|Vinyl acetate|108-05-4|1|-|4
147|01|1,2-二氯丙烷|1,2-Dichloropropane|78-87-5|1|50|1
148|01|氧化三丁錫|Tributyltin oxide|56-35-9|1|50|1,3,4
148|02|氫氧化三苯錫|Triphenyltin hydroxide|76-87-9|1|50|1,3,4
148|03|醋酸三丁錫|Tributyltin acetate|56-36-0|1|50|1,3
148|04|溴化三丁錫|Tributyltin bromide|1461-23-0|1|50|1,3
148|05|氯化三丁錫|Tributyltin chloride|1461-22-9|1|50|1,3
148|06|氟化三丁錫|Tributyltin fluoride|1983-10-4|1|50|1,3,4
148|07|氫化三丁錫|Tributyltin hydride|688-73-3|1|50|1,4
148|08|月桂酸三丁錫|Tributyltin laurate|3090-36-6|1|-|4
148|09|順丁烯二酸三丁錫|Tributyltin maleate|4027-18-3|1|-|4
148|10|三正丙基乙錫|Tri-n-propylethyltin|3440-79-7|1|-|4
148|11|三正丙基異丁錫|Tri-n-propylisobutyltin|92154-74-0|1|-|4
148|12|三正丙基正丁錫|Tri-n-propyl-n-butyltin|3634-62-6|1|-|4
148|13|碘化三正丙錫|Tri-n-propyltin iodide|7342-45-2|1|-|4
148|14|三苯基苄錫|Triphenylbenzyltin|2847-58-7|1|-|4
148|15|三苯基甲錫|Triphenylmethyltin|1089-59-4|1|-|4
148|16|三苯基-對-甲苯錫|Triphenyl-p-tolyltin|15807-28-0|1|-|4
148|17|溴化三苯錫|Triphenyltin bromide|962-89-0|1|50|1
148|18|氟化三苯錫|Triphenyltin fluoride|379-52-2|1|-|4
148|19|碘化三苯錫|Triphenyltin iodide|894-09-7|1|-|4
148|20|醋酸三苯錫|Triphenyltin acetate|900-95-8|1|50|1,3,4
148|21|氯化三苯錫|Triphenyltin chloride|639-58-7|1|50|1,3
148|22|三苯基-α-萘錫|Triphenyl-α-naphthyltin|81134-67-0|1|-|4
148|23|溴化三丙錫|Tripropyltin bromide|2767-61-5|1|-|4
148|24|氯化三丙錫|Tripropyltin chloride|2279-76-7|1|-|4
148|25|氟化三丙錫|Tripropyltin fluoride|682-32-6|1|-|4
148|26|溴化三甲苯錫|Tritolyltin bromide|58436-46-7|1|-|4
148|27|氯化三甲苯錫|Tritolyltin chloride|353747-42-9|1|-|4
148|28|氟化三甲苯錫|Tritolyltin fluoride|353747-43-0|1|-|4
148|29|氫氧化三甲苯錫|Tritolyltin hydroxide|228262-76-8|1|-|4
148|30|碘化三甲苯錫|Tritolyltin iodide|353747-44-1|1|-|4
148|31|參(三苯錫)甲烷|Tritriphenylstannylmethane|50485-45-5|1|-|4
148|32|溴化三茬錫|Trixylyltin bromide|353747-45-2|1|-|4
148|33|氯化三茬錫|Trixylyltin chloride|353747-46-3|1|-|4
148|34|氟化三茬錫|Trixylyltin fluoride|353747-47-4|1|-|4
148|35|碘化三茬錫|Trixylyltin iodide|353747-48-5|1|-|4
149|01|六氯乙烷|Hexachloroethane|67-72-1|1|50|1
150|01|六氯-1,3-丁二烯|Hexachloro-1,3-butadiene|87-68-3|1|50|1
151|01|鈹|Beryllium|7440-41-7|95|50|2
152|01|對-氯-鄰-甲苯胺|p-Chloro-o-toluidine|95-69-2|1|50|2
153|01|二甲基胺甲醯氯|Dimethylcarbamyl chloride|79-44-7|1|50|2
154|01|氧化苯乙烯|Styrene oxide|96-09-3|1|50|2
155|01|1,2,3-三氯丙烷|1,2,3-Trichloropropane|96-18-4|1|50|2
156|01|氟|Fluorine|7782-41-4|1|50|3
157|01|磷化氫|Phosphine|7803-51-2|1|50|3
158|01|三氯化磷|Phosphorus trichloride|7719-12-2|1|50|3
159|01|胺基硫脲|Thiosemicarbazide|79-19-6|1|50|3
160|01|甲基第三丁基醚|Methyl tert-butyl ether|1634-04-4|20|-|4
161|01|2,4-二氯酚|2,4-Dichlorophenol|120-83-2|1|-|4
162|01|二氯溴甲烷|Dichlorobromomethane|75-27-4|1|-|4
163|01|二環戊二烯|Dicyclopentadiene|77-73-6|1|-|4
164|01|聯胺|Hydrazine|302-01-2|1|-|4
165|01|壬基酚（壬酚）|Nonylphenol|25154-52-3|0.1|50|1,3,4
165|02|壬基酚聚乙氧基醇|Nonylphenol polyethylene glycol ether|9016-45-9|0.1|50|1,4
166|01|雙酚A|Bisphenol A|80-05-7|30|-|4
167|01|滅蟻樂|Mirex|2385-85-5|1|50|1,3
168|01|十氯酮|Chlordecone|143-50-0|1|50|1,3
169|01|全氟辛烷磺酸及其鹽類與相關化合物（PFOS）|PFOS, its salts and related compounds|1763-23-1|全濃度|50|1,2,4
169|04|全氟辛酸及其鹽類與相關化合物（PFOA）|PFOA, its salts and related compounds|335-67-1|全濃度|50|1,2,4
169|05|全氟己烷磺酸及其鹽類與相關化合物（PFHxS）|PFHxS, its salts and related compounds|355-46-4|全濃度|50|1
170|01|五氯苯|Pentachlorobenzene|608-93-5|1|50|1,3
171|01|六溴聯苯|Hexabromobiphenyl|36355-01-8|1|50|1
172|01|安殺番（工業級安殺番）|Endosulfan|115-29-7|1|50|1,3
172|02|α-安殺番|α-Endosulfan|959-98-8|1|50|1,3
172|03|β-安殺番|β-Endosulfan|33213-65-9|1|50|1,3
172|04|安殺番硫酸鹽|Endosulfan sulfate|1031-07-8|1|50|1,3
173|01|三(2-氯乙基)磷酸酯|Tris(2-chloroethyl) phosphate (TCEP)|115-96-8|1|50|2
174|01|六溴環十二烷|Hexabromocyclododecane (HBCD)|25637-99-4|1|50|1
174|02|α-六溴環十二烷|α-HBCD|134237-50-6|1|50|1
174|03|β-六溴環十二烷|β-HBCD|134237-51-7|1|50|1
174|04|γ-六溴環十二烷|γ-HBCD|134237-52-8|1|50|1
175|01|孔雀綠|Malachite green|569-64-2|1|-|4
176|01|順丁烯二酸（馬來酸）|Maleic acid|110-16-7|1|-|4
176|02|順丁烯二酸酐|Maleic anhydride|108-31-6|1|-|4
177|01|對位乙氧基苯脲（甘精）|Dulcin|150-69-6|1|-|4
178|01|溴酸鉀|Potassium bromate|7758-01-2|1|-|4
179|01|富馬酸二甲酯|Dimethyl fumarate|624-49-7|1|-|4
180|01|芐基紫|Benzyl violet 4B|1694-09-3|1|-|4
181|01|皂黃|Metanil yellow|587-98-4|1|-|4
182|01|玫瑰紅B|Rhodamine B|81-88-9|1|-|4
183|01|二甲基黃|Butter yellow|60-11-7|1|-|4
184|01|甲醛次硫酸氫鈉（吊白塊）|Sodium hydroxymethanesulfinate|149-44-0|1|-|4
185|01|三聚氰胺|Melamine|108-78-1|1|-|4
186|01|α-苯並吡喃酮（香豆素）|Coumarin|91-64-5|1|-|4
187|01|蘇丹1號|Sudan 1|842-07-9|1|-|4
187|02|蘇丹2號|Sudan 2|3118-97-6|1|-|4
187|03|蘇丹3號|Sudan 3|85-86-9|1|-|4
187|04|蘇丹4號|Sudan 4|85-83-6|1|-|4
187|05|蘇丹紅G|Sudan Red G|1229-55-6|1|-|4
187|06|蘇丹橙G|Sudan Orange G|2051-85-6|1|-|4
187|07|蘇丹黑B|Sudan Black B|4197-25-5|1|-|4
187|08|蘇丹紅7B|Sudan Red 7B|6368-72-5|1|-|4
188|01|二乙基黃|Diethyl yellow|2481-94-9|1|-|4
189|01|王金黃（塊黃）|Basic orange 2|532-82-1|1|-|4
190|01|鹽基性芥黃|Auramine|2465-27-2|1|-|4
191|01|紅色2號|Red No.2|915-67-3|1|-|4
192|01|氮紅|Azorubine|3567-69-9|1|-|4
193|01|橘色2號|Orange 2|633-96-5|1|-|4
194|01|短鏈氯化石蠟|Short-chain chlorinated paraffins (SCCPs)|85535-84-8|1|100|1
195|01|大克蟎|Dicofol|115-32-2|1|50|1,3
196|01|十氯三環十八碳二烯（得克隆）|Dechlorane Plus|13560-89-9|0.1|50|1,4
197|01|UV-328|2-(2H-Benzotriazol-2-yl)-4,6-ditertpentylphenol|25973-55-1|全濃度|50|1,4`,

CC: `L001|01|一氧化二氮（笑氣）|Nitrous oxide|10024-97-2|全濃度|N|-|-|民生議題類
L002|01|氟化氫（氫氟酸）|Hydrogen fluoride|7664-39-3|0.1|Y|100|300|民生議題類
L003|01|1,4-丁二醇|1,4-Butanediol|110-63-4|95|N|-|-|民生議題類
L004|01|海罌粟鹼|Glaucine|475-81-0|全濃度|N|-|-|民生議題類
L005|01|環丁烴|Cybutryne|28159-98-0|全濃度|N|-|-|民生議題類
F001|01|一氧化鉛|Lead monoxide|1317-36-8|90|N|-|-|具食安風險疑慮類
F001|02|四氧化三鉛|Lead tetroxide|1314-41-6|95|N|-|-|具食安風險疑慮類
F002|01|硫化鈉|Sodium sulfide|1313-82-2|50|N|-|-|具食安風險疑慮類
F003|01|硫氰酸鈉|Sodium thiocyanate|540-72-7|90|N|-|-|具食安風險疑慮類
F004|01|β-萘酚|β-Naphthol|135-19-3|95|N|-|-|具食安風險疑慮類
E001|01|硝酸銨|Ammonium nitrate|6484-52-2|80|Y|200|20000|爆裂物先驅化學物質類
E001|02|硝酸鈣|Calcium nitrate|10124-37-5|95|Y|200|20000|爆裂物先驅化學物質類
E001|03|硝酸鈉|Sodium nitrate|7631-99-4|65|Y|200|20000|爆裂物先驅化學物質類
E001|04|硝酸銨鈣|Calcium ammonium nitrate|15245-12-2|80|Y|200|20000|爆裂物先驅化學物質類
E002|01|硝基甲烷|Nitromethane|75-52-5|30|Y|100|10000|爆裂物先驅化學物質類
E003|01|疊氮化鈉|Sodium azide|26628-22-8|95|Y|5|500|爆裂物先驅化學物質類
E004|01|過氯酸銨|Ammonium perchlorate|7790-98-9|65|Y|200|1500|爆裂物先驅化學物質類
E004|02|過氯酸鈉|Sodium perchlorate|7601-89-0|40|Y|200|1500|爆裂物先驅化學物質類
E005|01|磷化鋁|Aluminium phosphide|20859-73-8|55|Y|5|500|爆裂物先驅化學物質類`,

MON_SC: [33,16,320,383,354,130,319,441,126,36,195,478,296,8,10,77,235,288,297,251,446,302,239,163,201,211,45,179,32,232,329,236,97,26,59,274,271,272,321,322,241,101,318,100,110,414]
};
