import React, { useState } from 'react';
import Ellipses from '.././img/ellipses.svg'
import Spelling from '.././img/spelling.svg'
import CommentGreen from '.././img/commentgreen.svg'
import FirstIconSave from ".././img/iconsave1.svg";
import DoubleIcon from '.././img/doubleicon.svg'
import WarningIcon from '.././img/warnicon.svg'
import CommentNew from '.././img/commentnew.svg';
import ButtonFirst from '.././img/button1.svg'
import FirstControls from '.././img/controls1.svg'
import SecondControls from '.././img/controls2.svg'
import ThirdControls from '.././img/controls3.svg'
import FourthControls from '.././img/controls4.svg'
import FithControls from '.././img/controls5.svg'
import SixthControls from '.././img/controls6.svg'
import { addTranslation } from '../api/add-translation';


export const ColumnItem = ({props}) => {

    const { index, origin, translation } = props

    const [translationText, setTranslationText] = useState(translation || '')
    const [saveVisible, setSaveVisible] = useState(false);

    const handleSave = (id, traslation) => {
        addTranslation(id, traslation);
        setSaveVisible(false);
    }

    return (
						<tr>
							<td><div class="counter__tooltip"><p>{index}</p></div></td>
							<td>
								<div class="full__translation">
									<div class="full__top">
										<div class="full__top-left">
											<div class="full__left--left">
												<div class="lang__info">
													<span>English  - United Kingdom</span>
													<div class="more__lang">
														<a href="#" data-more="more1" class="more__button"><img src={Ellipses} alt="ellipses" /></a>
														<div class="lang__list" data-more="more1">
															<ul>
																<li>
																	<a href="#">
																		<div class="list__image">
																			<img src={Spelling} alt="spelling" />
																		</div>
																		<div class="list__info">
																			<p>	Check spelling</p>
																		</div>
																		<span class="hotkeys__float">Ctrl+J</span>
																	</a>
																</li>
																<li>
																	<a href="#" class="lang__comment">
																		<div class="list__image">
																			<img src={CommentGreen} alt="spelling" />
																		</div>
																		<div class="list__info">
																			<p>	Add comment</p>
																			<span>	Mark text first</span>
																		</div>
																		<span class="hotkeys__float">Ctrl+K</span>
																	</a>
																</li>
															</ul>
														</div>
														<div class="comment__lang" data-more="more1">
														<form action="">
															<div class="comment__field">
																<input type="text" placeholder="Type comment..." />
															</div>
															<div class="comment__list">
																<p>For whom comment is?</p>
																<div class="list__comment--inner">
																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment1" type="checkbox" value="search__input" checked="" />
																		    <label for="comment1">Justas J. <span class="spacer__lang"></span><span class="comment__status">Project manager</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment2" type="checkbox" value="search__input" />
																		    <label for="comment2">Lukas B. <span class="spacer__lang"></span><span class="comment__status">Translator</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment3" type="checkbox" value="search__input" />
																		    <label for="comment3">Dalia M.<span class="spacer__lang"></span><span class="comment__status">Proofreader</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment4" type="checkbox" value="search__input" />
																		    <label for="comment4">Ausra D.<span class="spacer__lang"></span><span class="comment__status">Creative proofreader</span></label>
																		</div>
																	</div>



																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment5" type="checkbox" value="search__input" />
																		    <label for="comment5">Dalia M.<span class="spacer__lang"></span><span class="comment__status">Proofreader</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment6" type="checkbox" value="search__input" />
																		    <label for="comment6">Ausra D.<span class="spacer__lang"></span><span class="comment__status">Creative proofreader</span></label>
																		</div>
																	</div>


																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment7" type="checkbox" value="search__input" />
																		    <label for="comment7">Dalia M.<span class="spacer__lang"></span><span class="comment__status">Proofreader</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment8" type="checkbox" value="search__input" />
																		    <label for="comment8">Ausra D.<span class="spacer__lang"></span><span class="comment__status">Creative proofreader</span></label>
																		</div>
																	</div>
																</div>
																<div class="comment__controls">
																	<input type="submit" value="Comment" />
																	<a href="#">Cancel</a>
																</div>
															</div>
														</form>
													</div>
													</div>
													
												</div>
												<div class="translation__text">
													<p contenteditable="true">{origin}</p>
												</div>
											</div>
											<div class="full__left--right" onFocus={() => setSaveVisible(true)} >
												<div class="lang__info">
													<span>Danish </span>
													<div class="more__lang">
														<a href="#" data-more="more2" class="more__button"><img src={Ellipses} alt="ellipses" /></a>
														<div class="lang__list" data-more="more2">
															<ul>
																<li>
																	<a href="#">
																		<div class="list__image">
																			<img src={Spelling} alt="spelling" />
																		</div>
																		<div class="list__info">
																			<p>	Check spelling</p>
																		</div>
																		<span class="hotkeys__float">Ctrl+J</span>
																	</a>
																</li>
																<li>
																	<a href="#" class='lang__comment'>
																		<div class="list__image">
																			<img src={CommentGreen} alt="spelling" />
																		</div>
																		<div class="list__info">
																			<p>	Add comment</p>
																			<span>	Mark text first</span>
																		</div>
																		<span class="hotkeys__float">Ctrl+K</span>

																	</a>
																</li>
															</ul>
														</div>
														<div class="comment__lang" data-more="more2">
														<form action="">
															<div class="comment__field">
																<input type="text" placeholder="Type comment..." />
															</div>
															<div class="comment__list">
																<p>For whom comment is?</p>
																<div class="list__comment--inner">
																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment11" type="checkbox" value="search__input" checked="" />
																		    <label for="comment11">Justas J. <span class="spacer__lang"></span><span class="comment__status">Project manager</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment22" type="checkbox" value="search__input" />
																		    <label for="comment22">Lukas B. <span class="spacer__lang"></span><span class="comment__status">Translator</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment33" type="checkbox" value="search__input" />
																		    <label for="comment33">Dalia M.<span class="spacer__lang"></span><span class="comment__status">Proofreader</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment44" type="checkbox" value="search__input" />
																		    <label for="comment44">Ausra D.<span class="spacer__lang"></span><span class="comment__status">Creative proofreader</span></label>
																		</div>
																	</div>



																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment55" type="checkbox" value="search__input" />
																		    <label for="comment55">Dalia M.<span class="spacer__lang"></span><span class="comment__status">Proofreader</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment66" type="checkbox" value="search__input" />
																		    <label for="comment66">Ausra D.<span class="spacer__lang"></span><span class="comment__status">Creative proofreader</span></label>
																		</div>
																	</div>


																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment77" type="checkbox" value="search__input" />
																		    <label for="comment77">Dalia M.<span class="spacer__lang"></span><span class="comment__status">Proofreader</span></label>
																		</div>
																	</div>

																	<div class="elem__comment--lang">
																		<div>
																			<input class="styled-checkbox" id="comment88" type="checkbox" value="search__input" />
																		    <label for="comment88">Ausra D.<span class="spacer__lang"></span><span class="comment__status">Creative proofreader</span></label>
																		</div>
																	</div>
																</div>
																<div class="comment__controls">
																	<input type="submit" value="Comment" />
																	<a href="#">Cancel</a>
																</div>
															</div>
														</form>
													</div>
													</div>
												</div>
                                                {console.log(translationText)}
												<div class="translation__text">
													<textarea style={{border: 'none', backgroundColor:'inherit', resize: 'none', width: '100%'}} onChange={(e) => setTranslationText(e.target.value)} contenteditable="true">{translation}</textarea>
												</div>
                                                {saveVisible && <button style={{ top: 110, right:80 }} onClick={() => handleSave(index, translationText)} className="save-button">Save</button>}
											</div>
										</div>
										<div class="full__top--right">
											<div class="info__top--right">
												<div class="column__info">
													<div class="status__translate">
														<div class="status__info" style={{display: 'none'}}>
															<p>Confirmed</p>
															
														</div>
														<img src={FirstIconSave} alt="confirmedicon" />
													</div>
													<div class="double__arrow">
														<a href="#" class="double__bottom">
															<img src={DoubleIcon} alt="doubleicon" />
														</a>
														<div class="double__placeholder" style={{display: 'none'}}>
															<p>2 repetitions</p>
														</div>
													</div>
												</div>
												<div class="column__info">
													<div class="status_col">
														<span><img src={WarningIcon} alt="warnicon" /></span>
													</div>
													<div class="status__info status__small">
														<p>MT</p>
														<div class="status__float" style={{display: 'none'}}>
															<p>Machine translation</p>
														</div>
													</div>
													<div class="status__comment">
														<a href="#"><img src={CommentNew} alt="comment" /> <span>1</span></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="full__bottom">
										<div class="translate__controls">
										<div class="controls__left">
											<div class="controls__buttons--text">
												<div class="small__tag">
													<a href="#"><img src={ButtonFirst} alt="button" /></a>
													<div class="tag__float">
														<p>Bold text format <span>Ctrl+B</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#"><img src="img/button2.svg" alt="button" /></a>
													<div class="tag__float">
														<p>Italic text format <span>Ctrl+i</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#"><img src="img/button3.svg" alt="button" /></a>
													<div class="tag__float">
														<p>Underline text format <span>Ctrl+U</span></p>
													</div>
												</div>
											</div>
											<div class="controls__small">
												<div class="small__tag">
													<a href="#">
														<img src={FirstControls} alt="" />
													</a>
													<div class="tag__float">
														<p>Remove formating <span>F7</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#">
														<img src={SecondControls} alt="" />
													</a>
													<div class="tag__float">
														<p>Insert tag  <span>F8</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#">
														<img src={ThirdControls} alt="" />
													</a>
													<div class="tag__float">
														<p>Copy source to target <span>F10</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#">
														<img src={FourthControls} alt="" />
													</a>
													<div class="tag__float">
														<p>Remove tags <span>F6</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#">
														<img src={FithControls} alt="" />
													</a>
													<div class="tag__float">
														<p>Undo edit <span>Ctrl + Z</span></p>
													</div>
												</div>
												<div class="small__tag">
													<a href="#" class="disabled__button">
														<img src={SixthControls} alt="" />
													</a>
													<div class="tag__float">
														<p>Redo edit <span>Ctrl+Shift+Z</span></p>
													</div>
												</div>
											</div>
											<div class="controls__more">
												<a href="#" data-preview="controls1">
													<img src="img/controlsdots.svg" alt="controls" />
												</a>
											</div>
											<div class="controls__words">
												<p>69/1024</p>
											</div>
										</div>
										<div class="controls__right">

											<div class="controls__save">
												<a href="#"><span><img src="img/saveicon.svg" alt="save" /></span> Save <span class="droppable__controls"><img src="img/dropdownarrow.svg" alt="" /></span></a>
												<div class="controls__save--button">
													<a href="#"><img src="img/saveicon.svg" alt="saveicon" /> Save</a>
													<a href="#" class="droppable__controls"><img src="img/dropdownarrow.svg" alt="" /></a>
												</div>
												<div class="controls__drop">
													<ul>
														<li>
															<a href="#" data-src={FirstIconSave} data-text="Saved">
																<span class="controls__info"><span><img src={FirstIconSave} alt="iconsave" /></span> Save</span>
																<span class="hotkey__controls">Ctrl + Enter</span>
															</a>
														</li>
														<li>
															<a href="#" data-src="img/iconsave2.svg" data-text="Saved without TM">
																<span class="controls__info"><span><img src="img/iconsave2.svg" alt="iconsave" /></span> Save without TM</span>
																<span class="hotkey__controls">Alt + Enter</span>
															</a>
														</li>
														<li>
															<a href="#" data-src="img/iconsave3.svg" data-text="Draft">
																<span class="controls__info"><span><img src="img/iconsave3.svg" alt="iconsave" /></span> Save as draft</span>
																<span class="hotkey__controls">Shift + Enter</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div class="controls__errors">
												<div class="elem__error">
													<p><span><img src={WarningIcon} alt="" /></span> 2</p>
												</div>
												<div class="elem__error">
													<p><span><img src={WarningIcon} alt="" /></span> Missing formattings</p>
												</div>
												<div class="elem__error">
													<p><span><img src={WarningIcon} alt="" /></span> Identical text</p>
												</div>
												<div class="elem__error">
													<p><span><img src={WarningIcon} alt="" /></span> text info 3</p>
												</div>
												<div class="elem__error">
													<p><span><img src={WarningIcon} alt="" /></span>text info 20</p>
												</div>
											</div>
										</div>
									</div>
									<div class="translate__details details__active">
										<a href="#">Show less</a>
									</div>
 										<div class="translate__suggestions">
											<ul>
												<li><a href="#" data-switcher="suggestions__table">SUGGESTIONS <span>2</span></a></li>
												<li><a href="#" data-switcher="term__wrapper">TERM <span>2</span></a></li>
												<li><a href="#" data-switcher="history__wrapper">HISTORY <span>2</span></a></li>
												<li><a href="#" data-switcher="concordance__wrapper">CONCORDANCE</a></li>
												<li><a href="#" data-switcher="symbols__wrapper">SYMBOLS</a></li>
												<li><a href="#" data-switcher="qa__block">QA <span>17</span></a></li>
											</ul>
										</div>
										<div class="history__wrapper" style={{display: 'none'}}>
											<div class="elem__history">
												<div class="history__number">
													<span>1</span>
												</div>
												<div class="history__info">
													<div class="history__image">
														<img src="img/historyimage.png" alt="historyimage" />
													</div>
													<div class="history__details">
														<p>Lorem ipsum dolor sit amet, consectetur  <span class="history__approved">ipsum</span> <span class="history__not--approved">amet</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
														<span>Nov 25. 2019, 1:29 PM posteditin LW internal</span>
													</div>
												</div>
											</div>

											<div class="elem__history">
												<div class="history__number">
													<span>2</span>
												</div>
												<div class="history__info">
													<div class="history__image">
														<img src="img/historyimage.png" alt="historyimage" />
													</div>
													<div class="history__details">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
													</div>
												</div>
											</div>
										</div>
										<div class="concordance__wrapper" style={{display: 'none'}}>
										<form action="">
											<div class="concordance__search">
												<input type="text" placeholder="Source" />
												<input type="submit" value="" />
												<a href="#">
													<img src="img/closeicon.svg" alt="closeicon" />
												</a>
											</div>
											<div class="concordance__container">
												<div class="concordance__elem">
													<div class="el__half">
														<span>1</span>
														<p><span class="searched__span">Translation memory</span></p>
													</div>
													<div class="el__half">
														<p>Lorem ipsum dolor sit a</p>
													</div>
												</div>

												<div class="concordance__elem">
													<div class="el__half">
														<span>2</span>
														<p><span class="numb__span">1</span><span class="numb__span">2</span> A FAST <span class="searched__span">TRANSLATION</span></p>
													</div>
													<div class="el__half">
														<p><span class="numb__span">1</span><span class="numb__span">2</span> Lorem ipsum dolor sit a</p>
													</div>
												</div>


												<div class="concordance__elem">
													<div class="el__half">
														<span>1</span>
														<p>Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
													</div>
													<div class="el__half">
														<p>Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div class="qa__block" style={{display: 'none'}}>
										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/badgeicon.svg" alt="badge" /></span>
												<p>Missmatched trailing punctuation</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>
										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/badgeicon.svg" alt="badge" /></span>
												<p>Missmatched trailing punctuation</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>

										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/badgeicon.svg" alt="badge" /></span>
												<p>Missmatched trailing white spaces</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>

										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/badgeicon.svg" alt="badge" /></span>
												<p>Missmatched multiple white spaces</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>

										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/badgeicon.svg" alt="badge" /></span>
												<p>Missmatched numbers</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>

										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/identical.svg" alt="badge" /></span>
												<p>Identical text</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>

										<div class="elem__qa">
											<div class="qa__info">
												<span><img src="img/badgeicon.svg" alt="badge" /></span>
												<p>Repeated words</p>
											</div>
											<div class="qa__switcher">
												<span>Warning</span>
												<label class="switch">
												  <input type="checkbox" />
												  <span class="slider round"></span>
												</label>
											</div>
										</div>
									</div>
									<div class="suggestions__table" style={{display: 'none'}}>
										<div class="suggestion__elem">
											<div class="suggestion__left">
												<div class="suggest__el">
													<span>1</span>
													<p>Sitecore</p>
												</div>
												<div class="suggest__el">
													<p>Sitecore</p>
												</div>
											</div>
											<div class="suggestion__right">
												
												<div class="suggestion__info">
													<span>MT</span>
												</div>
											</div>
										</div>
									</div>
									<div class="term__wrapper">
										<div class="term__elem">
											<div class="term__double">
												<div class="el__term">
													<div class="term__left">
														<span>1</span>
														<p><span class="term__approved">Translation</span></p>
													</div>
													<div class="term__right">
														<div class="term__status">
															<p>Approved</p>
														</div>
													</div>
												</div>

												<div class="el__term">
													<div class="term__left">
														<p><span class="term__approved">Translation</span></p>
													</div>
													<div class="term__right">
														<div class="term__status">
															<p>Approved</p>
														</div>
													</div>
												</div>
											</div>
											<div class="term__status">
												<div class="term__status--info">
													<img src="img/termicon.svg" alt="termicon" />
												</div>
											</div>
										</div>
									</div>
									<div class="symbols__wrapper" style={{display: 'none'}}>
                                         <div class="symbols__elem">
                                         	<div class="symbols__head">
                                         		<span>Extended Latin</span>
                                         	</div>
                                         	<div class="symbols__container">
                                         		<div class="el__symbol">
                                         			<span>Ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>ā</span>
                                         		</div>
                                         	</div>
                                         </div>




                                         <div class="symbols__elem">
                                         	<div class="symbols__head">
                                         		<span>Signs</span>
                                         	</div>
                                         	<div class="symbols__container">
                                         		<div class="el__symbol">
                                         			<span>-</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>—</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>§</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>©</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>™</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>®</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>¿</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>:</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>«</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>»</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>“</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>„</span>
                                         		</div>
                                         	</div>
                                         </div>


                                         <div class="symbols__elem">
                                         	<div class="symbols__head">
                                         		<span>Currencies</span>
                                         	</div>
                                         	<div class="symbols__container">
                                         		<div class="el__symbol">
                                         			<span>€</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>¢</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>₤</span>
                                         		</div>
                                         		<div class="el__symbol">
                                         			<span>Ұ</span>
                                         		</div>
                                         	</div>
                                         </div>
									</div>

									</div>
								</div>
							</td>
						</tr>
    )
}